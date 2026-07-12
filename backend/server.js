require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const chatRoute = require("./routes/chatRoute");
const cropRoutes = require("./routes/cropRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoute);
app.use("/api/crops", cropRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Handle undefined routes
app.use(notFound);

// Global error handler
app.use(errorHandler);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.error(err);
  });
app.listen(5000, () => {
  console.log("Server running on port 5000");
});