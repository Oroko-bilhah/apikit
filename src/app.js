const express = require("express");

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "APIkit server is running!",
    health: "/api/v1/health",
  });
});

// Health check endpoint
app.get(["/health", "/api/v1/health"], (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
