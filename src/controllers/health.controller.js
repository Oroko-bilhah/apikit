const getHealth = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getHealth,
};
