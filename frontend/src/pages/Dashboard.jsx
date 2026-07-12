import { useEffect, useRef, useState } from "react";
import {
  getAllCrops,
  searchCrops,
} from "../services/cropService";
import { askAI } from "../services/chatService";

import DashboardLayout from "../layout/DashboardLayout";

import WelcomeBanner from "../components/WelcomeBanner";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import WeatherWidget from "../components/WeatherWidget";
import RecentCrops from "../components/RecentCrops";
import ChatMessage from "../components/ChatMessage";

function Dashboard() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      message:
        "👋 Hello! I am AgriAssist AI.\n\nAsk me anything about crops, diseases, irrigation, fertilizers, or pest management.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [stats, setStats] = useState({
    crops: 0,
    diseases: 0,
    irrigation: 0,
    queries: 0,
  });

  const [cropList, setCropList] = useState([]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const chatEndRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Fetch dashboard statistics
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const crops = await getAllCrops();

        setCropList(crops);

        const diseaseCount = new Set(
          crops.map((crop) => crop.disease)
        ).size;

        const irrigationCount = new Set(
          crops.map((crop) => crop.irrigation)
        ).size;

        setStats({
          crops: crops.length,
          diseases: diseaseCount,
          irrigation: irrigationCount,
          queries: 0,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  // Live Search
  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!search.trim()) {
        setSearchResults([]);
        return;
      }

      try {
        const data = await searchCrops(search);
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  // AI Chat
  const sendMessage = async () => {
    const text = input.trim();

    if (!text) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: text,
      },
    ]);

    setInput("");

    setLoading(true);

    try {
      const response = await askAI(text);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: response.reply,
        },
      ]);

      setStats((prev) => ({
        ...prev,
        queries: prev.queries + 1,
      }));
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message:
            "❌ Sorry, I couldn't connect to the AI server. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <DashboardLayout>
      <WelcomeBanner />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Available Crops"
          value={stats.crops}
        />

        <StatsCard
          title="AI Queries"
          value={stats.queries}
        />

        <StatsCard
          title="Diseases"
          value={stats.diseases}
        />

        <StatsCard
          title="Irrigation Methods"
          value={stats.irrigation}
        />
      </div>

      <div className="mt-8">
        <SearchBar
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />

        {search && (
          <div className="mt-6 rounded-xl bg-white p-5 shadow">
            <h3 className="mb-4 text-xl font-semibold">
              Search Results
            </h3>

            {searchResults.length === 0 ? (
              <p>No crops found.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {searchResults.map((crop) => (
                  <div
                    key={crop._id || crop.id}
                    className="rounded-lg border p-4"
                  >
                    <h4 className="font-bold">
                      🌾 {crop.name}
                    </h4>

                    <p>
                      <strong>Disease:</strong>{" "}
                      {crop.disease}
                    </p>

                    <p>
                      <strong>Irrigation:</strong>{" "}
                      {crop.irrigation}
                    </p>

                    <p>
                      <strong>Season:</strong>{" "}
                      {crop.season}
                    </p>

                    {crop.fertilizer && (
                      <p>
                        <strong>Fertilizer:</strong>{" "}
                        {crop.fertilizer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <WeatherWidget />
        <RecentCrops crops={cropList} />
      </div>

      <div className="mt-10 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-2xl font-bold text-green-700 dark:text-green-400">
          🤖 AI Crop Advisor
        </h2>

        <div className="h-[450px] overflow-y-auto rounded-lg border bg-gray-50 p-4 dark:bg-gray-900">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

          {loading && (
            <div className="mt-4 flex items-center gap-2 text-gray-500">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-600"></div>
              <p>AgriAssist AI is thinking...</p>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        <div className="mt-5 flex gap-3">
          <input
            type="text"
            placeholder="Ask anything about crops..."
            className="flex-1 rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;