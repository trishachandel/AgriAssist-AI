require("dotenv").config();

const mongoose = require("mongoose");
const Crop = require("./models/Crop");
const crops = require("./data/crops");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    await Crop.deleteMany();

    console.log("🗑 Existing crops deleted");

    await Crop.insertMany(crops);

    console.log("🌱 Crop data inserted successfully");

    console.log("🎉 Database seeding completed!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();