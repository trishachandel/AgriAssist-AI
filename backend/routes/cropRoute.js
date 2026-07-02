const express = require("express");

const router = express.Router();

const {
  getAllCrops,
  getCropById,
  addCrop,
  updateCrop,
  deleteCrop,
  searchCrop,
} = require("../controllers/cropController");

// Get all crops
router.get("/", getAllCrops);

// Search crops by name
router.get("/search", searchCrop);

// Get crop by ID
router.get("/:id", getCropById);

// Add a new crop
router.post("/", addCrop);

// Update crop
router.put("/:id", updateCrop);

// Delete crop
router.delete("/:id", deleteCrop);

module.exports = router;