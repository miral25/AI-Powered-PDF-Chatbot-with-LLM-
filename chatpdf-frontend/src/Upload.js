import React, { useState } from "react";
import axios from "axios";

function Upload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      setStatus("Uploading...");
      await axios.post("http://localhost:8000/upload/", formData);
      setStatus("Uploaded!");
      onUpload();
    } catch (err) {
      setStatus("Upload failed.");
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload PDF</button>
      <p>{status}</p>
    </div>
  );
}

export default Upload;
