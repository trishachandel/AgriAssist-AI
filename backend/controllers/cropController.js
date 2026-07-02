const crops = require("../data/crops");

// Get all crops
const getAllCrops = (req, res) => {
  res.status(200).json(crops);
};

// Get crop by ID
const getCropById = (req, res) => {
  const crop = crops.find(c => c.id == req.params.id);

  if (!crop) {
    return res.status(404).json({
      message: "Crop not found"
    });
  }

  res.status(200).json(crop);
};

// Add crop
const addCrop = (req, res) => {
  const newCrop = {
    id: crops.length + 1,
    ...req.body
  };

  crops.push(newCrop);

  res.status(201).json(newCrop);
};

// Update crop
const updateCrop = (req, res) => {
  const crop = crops.find(c => c.id == req.params.id);

  if (!crop) {
    return res.status(404).json({
      message: "Crop not found"
    });
  }

  crop.name = req.body.name || crop.name;
  crop.disease = req.body.disease || crop.disease;
  crop.irrigation = req.body.irrigation || crop.irrigation;

  res.status(200).json(crop);
};

// Delete crop
const deleteCrop = (req, res) => {
  const index = crops.findIndex(c => c.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Crop not found"
    });
  }

  crops.splice(index, 1);

  res.status(204).send();
};

// Search crop
const searchCrop = (req, res) => {
  const name = req.query.name?.toLowerCase() || "";

  const result = crops.filter(c =>
    c.name.toLowerCase().includes(name)
  );

  res.status(200).json(result);
};

module.exports = {
  getAllCrops,
  getCropById,
  addCrop,
  updateCrop,
  deleteCrop,
  searchCrop
};