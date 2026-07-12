import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CropDetails() {
  const { id } = useParams();

  const [crop, setCrop] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/crops/${id}`)
      .then((res) => {
        setCrop(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!crop) {
    return (
      <>
        <Navbar />
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-5xl p-10">

        <h1 className="mb-8 text-4xl font-bold text-green-700">
          {crop.name}
        </h1>

        <div className="rounded-xl bg-white p-8 shadow">

          <p className="mb-4">
            <strong>Season:</strong> {crop.season}
          </p>

          <p className="mb-4">
            <strong>Disease:</strong> {crop.disease}
          </p>

          <p className="mb-4">
            <strong>Irrigation:</strong> {crop.irrigation}
          </p>

          <p className="mb-4">
            <strong>Soil:</strong> {crop.soil}
          </p>

          <p className="mb-4">
            <strong>Fertilizer:</strong> {crop.fertilizer}
          </p>

          <p>
            <strong>Description:</strong> {crop.description}
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default CropDetails;