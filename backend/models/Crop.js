const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    disease: {
      type: String,
      required: true,
    },

    irrigation: {
      type: String,
      required: true,
    },

    season: {
      type: String,
      required: true,
    },

    soil: {
      type: String,
      default: "",
    },

    fertilizer: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Crop", cropSchema);