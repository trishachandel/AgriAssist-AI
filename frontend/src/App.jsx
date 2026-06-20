import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: userMessage,
        }
      );

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Error getting response",
        },
      ]);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🌾 Agri-Allied Crop Advisory Chatbot
      </h1>

      <div
        style={{
          border: "1px solid gray",
          height: "450px",
          overflowY: "auto",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        {chat.map((msg, index) => (
          <div key={index}>
            <p>
              <strong>
                {msg.sender === "user" ? "You" : "Bot"}:
              </strong>{" "}
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Ask about crops, pests or diseases..."
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>

      <p
        style={{
          color: "red",
          marginTop: "20px",
        }}
      >
        Disclaimer: AI-generated advice should be
        verified with a licensed agricultural
        extension officer.
      </p>
    </div>
  );
}

export default App;