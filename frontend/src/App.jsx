import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentsDemo from "./pages/ComponentsDemo";
import CropDetails from "./pages/CropDetails";
import Toast from "./components/ui/Toast";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Toast />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/login" element={<Login />} />
<Route
  path="/register"
  element={<Register />}
/>
        <Route path="/components" element={<ComponentsDemo />} />

        <Route
          path="/crop/:id"
          element={<CropDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;