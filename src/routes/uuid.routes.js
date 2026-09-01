const express = require("express");
const { generateUUID } = require("../controllers/uuid.controller");

const router = express.Router();

router.get("/", generateUUID);

module.exports = router;
