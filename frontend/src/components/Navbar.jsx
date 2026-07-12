import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  return (

    <nav className="bg-green-700 text-white shadow">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          🌱 AgriAssist AI
        </h1>

        <div className="flex items-center gap-6">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/components">
            Components
          </Link>

          <button
            className="rounded bg-white px-3 py-1 text-green-700"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;