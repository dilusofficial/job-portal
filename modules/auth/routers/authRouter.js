import { Router } from "express";
import {
  forgotPassword,
  googleLogin,
  login,
  logoutUser,
  register,
  resetPassword,
  sendOTP,
  verifyOTP,
} from "../controllers/authController.js";
import { authenticateUser } from "../../../middleware/authMiddleware.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logoutUser);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/google-login", googleLogin);
router.post("/send-otp", authenticateUser, sendOTP);
router.post("/verify", authenticateUser, verifyOTP);

export default router;
