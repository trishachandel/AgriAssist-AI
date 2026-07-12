import { Link } from "react-router-dom";

function Card({
  title,
  description,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-3 text-2xl font-bold text-green-700">
        {title}
      </h3>

      <p className="mb-6 whitespace-pre-line text-gray-600">
        {description}
      </p>

      <Link
        to="/dashboard"
        className="rounded-lg bg-green-700 px-4 py-2 text-white transition hover:bg-green-800"
      >
        Ask AI
      </Link>
    </div>
  );
}

export default Card;