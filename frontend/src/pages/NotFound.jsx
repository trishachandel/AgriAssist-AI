import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">

      <h1 className="text-8xl font-bold text-green-700">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
      >
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;