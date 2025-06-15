import React, { useState } from "react";
import Upload from "./Upload";
import Chat from "./Chat";
import "./App.css";

function App() {
  const [pdfUploaded, setPdfUploaded] = useState(false);

  return (
    <div className="App">
      <h1>📄 Chat with Your PDF</h1>
      {!pdfUploaded ? (
        <Upload onUpload={() => setPdfUploaded(true)} />
      ) : (
        <Chat />
      )}
    </div>
  );
}

export default App;
