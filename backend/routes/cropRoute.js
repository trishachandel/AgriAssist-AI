const express = require("express");

const router = express.Router();

const {
  getAllCrops,
  getCropById,
  searchCrops,
  addCrop,
  updateCrop,
  deleteCrop,
} = require("../controllers/cropController");

// Search crops
router.get("/search", searchCrops);

// Get all crops
router.get("/", getAllCrops);

// Get crop by ID
router.get("/:id", getCropById);

// Add a new crop
router.post("/", addCrop);

// Update a crop
router.put("/:id", updateCrop);

// Delete a crop
router.delete("/:id", deleteCrop);

module.exports = router;