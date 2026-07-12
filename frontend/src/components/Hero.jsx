import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">

        <h1 className="text-5xl font-bold">
          🌱 AgriAssist AI
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Smart AI-powered crop advisory platform that helps farmers with
          disease diagnosis, irrigation guidance, crop recommendations and
          intelligent farming support.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            to="/dashboard"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-100 transition"
          >
            Start AI Chat
          </Link>

          <Link
            to="/about"
            className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-green-700 transition"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;