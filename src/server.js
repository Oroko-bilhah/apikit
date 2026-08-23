const app = require("./app");

const { PORT } = require("./config/env");

console.log(`Starting APIkit on port: ${PORT}`);

app.listen(PORT, () => {
  console.log(`APIkit server is running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/v1/health`);
});