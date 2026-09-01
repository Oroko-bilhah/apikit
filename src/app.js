const express = require("express");
const healthRoutes = require("./routes/health.routes");
const uuidRoutes = require("./routes/uuid.routes");

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "APIkit server is running!",
    endpoints: {
      health: "/api/v1/health",
      uuid: "/api/v1/uuid",
    },
  });
});

// API v1 routes
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/uuid", uuidRoutes);

// Fallback health route
app.use("/health", healthRoutes);

module.exports = app;
