import { Router } from "express";
import {
  forgotPassword,
  login,
  register,
} from "../controllers/authController.js";

const router = Router();

router.get("/login", login);
router.get("/register", register);
router.get("/forgotPassword", forgotPassword);

export default router;
