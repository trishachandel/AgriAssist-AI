import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-gray-900 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">
        Ready to Improve Your Farming?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-gray-300">
        Use AgriAssist AI to get intelligent recommendations,
        disease detection guidance, and crop management support.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold hover:bg-green-700"
      >
        Start Using AI
      </Link>
    </section>
  );
}

export default CallToAction;