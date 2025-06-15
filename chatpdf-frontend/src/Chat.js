import React, { useState } from "react";
import axios from "axios";

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAsk = async () => {
    setMessages([...messages, { from: "user", text: question }]);
    setQuestion("");
    try {
      const form = new FormData();
      form.append("question", question);
      const res = await axios.post("http://localhost:8000/ask/", form);
      setMessages((prev) => [...prev, { from: "bot", text: res.data.answer }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "Error occurred." }]);
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-log">
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.from}`}>
            <strong>{msg.from === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question..."
      />
      <button onClick={handleAsk}>Send</button>
    </div>
  );
}

export default Chat;
