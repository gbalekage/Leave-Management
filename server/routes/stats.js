// server/routes/leave.js
const express = require("express");
const {getLeaveStats} = require("../controllers/stats");

const router = express.Router();

router.get("/", getLeaveStats);

module.exports = router;
