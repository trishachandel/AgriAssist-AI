import api from "./api";

// Get all crops
export const getAllCrops = async () => {
  const response = await api.get("/crops");
  return response.data;
};

// Search crops
export const searchCrops = async (query) => {
  const response = await api.get(
    `/crops/search?q=${encodeURIComponent(query)}`
  );

  return response.data;
};

// Get crop by ID
export const getCropById = async (id) => {
  const response = await api.get(`/crops/${id}`);
  return response.data;
};

// Add crop (Protected)
export const addCrop = async (cropData) => {
  const response = await api.post(
    "/crops",
    cropData
  );

  return response.data;
};

// Update crop (Protected)
export const updateCrop = async (id, cropData) => {
  const response = await api.put(
    `/crops/${id}`,
    cropData
  );

  return response.data;
};

// Delete crop (Protected)
export const deleteCrop = async (id) => {
  const response = await api.delete(
    `/crops/${id}`
  );

  return response.data;
};