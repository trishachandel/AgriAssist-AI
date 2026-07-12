const express = require("express");

const {
  getAllCrops,
  getCropById,
  searchCrops,
  addCrop,
  updateCrop,
  deleteCrop,
} = require("../controllers/cropController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.get("/", getAllCrops);

router.get("/search", searchCrops);

router.get("/:id", getCropById);

// Protected Routes
router.post("/", authMiddleware, addCrop);

router.put("/:id", authMiddleware, updateCrop);

router.delete("/:id", authMiddleware, deleteCrop);

module.exports = router;