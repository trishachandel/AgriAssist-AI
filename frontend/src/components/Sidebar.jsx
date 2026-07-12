import { Link } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Leaf,
  User,
  LogIn
} from "lucide-react";

function Sidebar() {

  return (

    <aside className="hidden w-64 bg-green-800 text-white lg:block">

      <div className="p-6">

        <h2 className="mb-8 text-2xl font-bold">

          🌱 AgriAssist

        </h2>

        <nav className="space-y-5">

          <Link
            to="/"
            className="flex items-center gap-3 hover:text-green-300"
          >
            <Home size={20}/>
            Home
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-green-300"
          >
            <LayoutDashboard size={20}/>
            Dashboard
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-3 hover:text-green-300"
          >
            <Leaf size={20}/>
            About
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-3 hover:text-green-300"
          >
            <LogIn size={20}/>
            Login
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 hover:text-green-300"
          >
            <User size={20}/>
            Profile
          </Link>

        </nav>

      </div>

    </aside>

  );

}

export default Sidebar;