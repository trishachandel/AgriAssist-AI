import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

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
        console.error("Error fetching crops:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          padding: "20px",
        }}
      >
        <h2>Available Crops</h2>

        {loading ? (
          <Loader />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {crops.map((crop) => (
              <Card
                key={crop.id}
                title={crop.name}
                description={`Disease: ${crop.disease} | Irrigation: ${crop.irrigation}`}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;