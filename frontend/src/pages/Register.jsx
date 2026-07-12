import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      await registerUser(formData);

      alert("Registration Successful!");

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center bg-gray-100">

        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

          <h1 className="mb-6 text-center text-3xl font-bold text-green-700">
            Register
          </h1>

          <form onSubmit={handleSubmit}>

            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            {error && (
              <p className="mb-4 text-red-600">
                {error}
              </p>
            )}

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>

          </form>

          <p className="mt-5 text-center">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 font-semibold text-green-700"
            >
              Login
            </Link>

          </p>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Register;