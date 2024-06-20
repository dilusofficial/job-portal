import { Router } from "express";
import { authenticateUser } from "../../../middleware/authMiddleware.js";
import { userInfo } from "../contollers/userController.js";

const router = Router();
router.get("/info", authenticateUser, userInfo);

export default router;
