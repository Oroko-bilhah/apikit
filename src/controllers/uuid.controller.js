const { v4: uuidv4, v1: uuidv1 } = require("uuid");

const generateUUID = (req, res) => {
  try {
    const version = req.query.version || "4";
    if (version !== "1" && version !== "4") {
      return res.status(400).json({
        success: false,
        message: "Version must be 1 or 4",
    });
  }
    const count = Math.min(Math.max(parseInt(req.query.count, 10) || 1, 1), 100);

    const generateOne = () => {
      if (version === "1") return uuidv1();
      return uuidv4();
    };

    if (count > 1) {
      const uuids = Array.from({ length: count }, () => generateOne());
      return res.status(200).json({
        success: true,
        count,
        version: version === "1" ? "v1" : "v4",
        uuids,
      });
    }

    const uuid = generateOne();
    return res.status(200).json({
      success: true,
      version: version === "1" ? "v1" : "v4",
      uuid,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate UUID",
      error: error.message,
    });
  }
};

module.exports = {
  generateUUID,
};
