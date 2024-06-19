import { Router } from "express";
import {
  forgotPassword,
  googleLogin,
  login,
  logoutUser,
  register,
} from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logoutUser);
router.get("/forgotPassword", forgotPassword);
router.post("/google-login", googleLogin);

export default router;
