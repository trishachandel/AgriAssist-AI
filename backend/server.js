require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chatRoute = require("./routes/chatRoute");
const cropRoutes = require("./routes/cropRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoute);
app.use("/api/crops", cropRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Register error handler LAST
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});