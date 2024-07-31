const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
app.use("/api", weatherRoutes);

module.exports = app;
