function App() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "50px auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      <h1
  style={{
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
  }}
>
  🌾 Agri-Allied Crop Advisory Chatbot 🌾
</h1>

      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          padding: "15px",
          marginTop: "20px",
          overflowY: "auto",
          borderRadius: "10px"
        }}
      >
        <p><strong>Bot:</strong> Welcome! Ask me about crop diseases, pests, or farming practices.</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Type your agricultural query..."
          style={{
            width: "80%",
            padding: "10px"
          }}
        />

        <button
          style={{
            padding: "10px 20px",
            marginLeft: "10px"
          }}
        >
          Send
        </button>
      </div>

      <p style={{ marginTop: "20px", color: "red" }}>
        Disclaimer: AI-generated advice should be verified with a licensed agricultural extension officer.
      </p>
    </div>
  );
}

export default App;