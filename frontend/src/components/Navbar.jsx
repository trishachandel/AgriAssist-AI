import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.className = "light";
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "15px",
        background: "#2d6a4f",
        color: "white",
      }}
    >
      <h2>🌾 Crop Advisor</h2>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link style={{ color: "white" }} to="/">Home</Link>
        <Link style={{ color: "white" }} to="/about">About</Link>
        <Link style={{ color: "white" }} to="/dashboard">Dashboard</Link>
        <Link style={{ color: "white" }} to="/login">Login</Link>
        <Link style={{ color: "white" }} to="/components">Components</Link>

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
          }}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;