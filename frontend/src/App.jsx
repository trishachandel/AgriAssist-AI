import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentsDemo from "./pages/ComponentsDemo";
import CropDetails from "./pages/CropDetails";
import Toast from "./components/ui/Toast";

function App() {

  return (

    <BrowserRouter>

      <Toast />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/components"
          element={<ComponentsDemo />}
        />

        <Route
  path="/crop/:id"
  element={<CropDetails />}
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;