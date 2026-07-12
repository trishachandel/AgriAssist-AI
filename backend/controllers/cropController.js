const Crop = require("../models/Crop");

// Get all crops
const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find().sort({ createdAt: -1 });
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get crop by ID
const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.json(crop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search crops
const searchCrops = async (req, res) => {
  try {
    const query = req.query.q || "";

    const crops = await Crop.find({
      name: {
        $regex: query,
        $options: "i",
      },
    });

    res.json(crops);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add crop
const addCrop = async (req, res) => {
  try {
    const crop = await Crop.create(req.body);

    res.status(201).json(crop);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update crop
const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.json(crop);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete crop
const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.json({
      message: "Crop deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllCrops,
  getCropById,
  searchCrops,
  addCrop,
  updateCrop,
  deleteCrop,
};