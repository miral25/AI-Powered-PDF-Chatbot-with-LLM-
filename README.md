# AI-Powered-PDF-Chatbot-with-LLM

A full-stack AI chatbot that lets users upload a single PDF and ask natural language questions about its content. Built with local LLMs and Retrieval-Augmented Generation (RAG).

## 🚀 Features
- Upload a single PDF file
- Ask questions about its contents
- Uses LangChain with ChromaDB for RAG
- Local LLM using Ollama + Mistral
- React frontend and FastAPI backend

## 🛠 Tech Stack
React, FastAPI, Python, LangChain, Ollama, Mistral, ChromaDB, HuggingFace Transformers

## 📂 Project Structure
```
llm-pdf-chatbot/
├── chatpdf-frontend/     # React frontend
├── chatpdf-backend/      # FastAPI backend
└── README.md             # Project overview
```

## ⚙️ Getting Started (Windows)

### 1. Clone the repository
```cmd
git clone https://github.com/YOUR_USERNAME/llm-pdf-chatbot.git
cd llm-pdf-chatbot
```

### 2. Backend Setup
```cmd
cd chatpdf-backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Make sure you have Ollama installed and then run:
```cmd
ollama run mistral
```

### 3. Frontend Setup
```cmd
cd chatpdf-frontend
npm install
npm start
```

## 📄 License
MIT – free to use and customize.
