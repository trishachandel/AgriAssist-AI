import { useEffect, useState } from "react";
import axios from "axios";
import CallToAction from "../components/CallToAction";
import StatsSection from "../components/StatsSection";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Features from "../components/Features";
function Home() {

  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/crops")
      .then((response) => {
        setCrops(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  return (
    <>
      <Navbar />

      <Hero />
      <Features />
      <StatsSection />
      <section className="bg-gray-100 py-16">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold text-center text-green-700">
            Available Crops
          </h2>

          <p className="text-center text-gray-600 mt-3 mb-10">
            Browse crop information fetched from the backend API.
          </p>

          {loading ? (
            <Loader />
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {crops.map((crop) => (
                <Card
                  key={crop.id}
                  title={crop.name}
                  description={`Disease: ${crop.disease}
Irrigation: ${crop.irrigation}
Season: ${crop.season}`}
                />
              ))}

            </div>
          )}

        </div>

      </section>
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;