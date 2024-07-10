import { Router } from "express";
import {
  getMessages,
  sendMessages,
} from "../controllers/JPMessageController.js";

const router = Router();

router.get("/", getMessages);
router.post("/send", sendMessages);

export default router;
