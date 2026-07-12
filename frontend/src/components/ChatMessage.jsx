function ChatMessage({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`mb-4 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow ${
          isUser
            ? "bg-green-700 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="mb-1 text-xs font-semibold">
          {isUser ? "You" : "AgriAssist AI"}
        </p>

        <p className="whitespace-pre-wrap">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;