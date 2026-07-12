import axios from "axios";

const API = "http://localhost:5000/api/crops";

export const getAllCrops = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const searchCrops = async (name) => {
  const response = await axios.get(
    `${API}/search?name=${name}`
  );

  return response.data;
};