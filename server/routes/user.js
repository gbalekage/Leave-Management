const express = require("express");
const {
  createUser,
  verifyEmail,
  requestNewVerificationCode,
  loginUser,
  forgotPassword,
  resetPassword,
  getAllUsers,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const router = express.Router();

router.post("/create-user", createUser);
router.post("/verify-email", verifyEmail);
router.post("/request-new-code", requestNewVerificationCode);
router.post("/login-user", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.delete("/delete-user/:id", deleteUser);
router.put("/update-user/:id", updateUser);
router.get("/all-users", getAllUsers);

module.exports = router;
