import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {

  return (

    <>
      <Navbar />

      <div className="flex min-h-screen flex-col items-center justify-center">

        <h1 className="text-7xl font-bold text-green-700">
          404
        </h1>

        <p className="mt-4 text-xl">
          Page Not Found
        </p>

        <Link
          to="/"
          className="mt-6 rounded bg-green-700 px-6 py-3 text-white"
        >
          Go Home
        </Link>

      </div>

      <Footer />

    </>

  );

}

export default NotFound;