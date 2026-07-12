const validateCrop = (req, res, next) => {
  const {
    name,
    disease,
    irrigation,
    season,
  } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Crop name is required.",
    });
  }

  if (!disease || disease.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Disease information is required.",
    });
  }

  if (!irrigation || irrigation.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Irrigation information is required.",
    });
  }

  if (!season || season.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Season is required.",
    });
  }

  next();
};

module.exports = validateCrop;