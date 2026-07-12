import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
  return (
    <>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center bg-gray-100">

        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

          <h1 className="mb-6 text-center text-3xl font-bold text-green-700">
            Login
          </h1>

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <Button
            variant="primary"
            size="lg"
          >
            Login
          </Button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Login;