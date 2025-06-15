from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from rag_utils import load_and_split_pdf, build_vector_store
from langchain.chains import RetrievalQA
from langchain.llms import Ollama
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

vectorstore = None

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    file_path = f"temp_{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())
    docs = load_and_split_pdf(file_path)
    global vectorstore
    vectorstore = build_vector_store(docs)
    os.remove(file_path)
    return {"message": "PDF processed and stored."}

@app.post("/ask/")
async def ask_question(question: str = Form(...)):
    if not vectorstore:
        return {"error": "No PDF uploaded yet."}
    llm = Ollama(model="mistral")
    qa = RetrievalQA.from_chain_type(llm=llm, retriever=vectorstore.as_retriever())
    result = qa.run(question)
    return {"answer": result}
