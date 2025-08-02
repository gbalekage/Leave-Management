const express = require("express");
const {
  getAllLeaves,
  createLeave,
  acceptLeave,
  rejectLeave,
  getLeavesByUser,
} = require("../controllers/leave");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.patch("/accept/:id", verifyToken, acceptLeave);
router.patch("/reject/:id", verifyToken, rejectLeave);
router.get("/me/:userId", getLeavesByUser);
router.post("/create-leave/:id", createLeave);
router.get("/all-leaves", getAllLeaves);

module.exports = router;
