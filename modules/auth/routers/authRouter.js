import { Router } from "express";
import {
  userInfo,
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
import {
  validateLoginInput,
  validateRegisterInput,
} from "../../../middleware/validationMiddleware.js";

const router = Router();

router.post("/login", validateLoginInput, login);
router.post("/register", validateRegisterInput, register);
router.post("/logout", logoutUser);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/google-login", googleLogin);
router.post("/send-otp", authenticateUser, sendOTP);
router.post("/verify", authenticateUser, verifyOTP);
router.get("/userInfo", authenticateUser, userInfo);

export default router;
