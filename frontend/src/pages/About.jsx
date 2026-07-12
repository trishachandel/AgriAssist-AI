import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-4xl font-bold text-green-700">
          About AgriAssist AI
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          AgriAssist AI is an intelligent crop advisory platform designed to
          help farmers make informed agricultural decisions using Artificial
          Intelligence.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The platform provides crop recommendations, disease diagnosis
          assistance, irrigation guidance, and AI-powered farming support
          through a simple and user-friendly interface.
        </p>

        <div className="mt-10 rounded-xl bg-green-100 p-6">
          <h2 className="text-2xl font-semibold text-green-800">
            Technologies Used
          </h2>

          <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Google Gemini API</li>
            <li>REST APIs</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;