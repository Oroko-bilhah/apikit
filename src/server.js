const app = require("./app");

const PORT = process.env.PORT || 5000;

console.log("App loaded:", typeof app);
console.log(`Starting APIkit on port: ${PORT}`);

app.listen(PORT, () => {
  console.log(`APIkit server is running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/v1/health`);
});