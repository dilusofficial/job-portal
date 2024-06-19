import { Router } from "express";
import {
  about,
  contact,
  home,
  userInfo,
} from "../contollers/homeController.js";

const router = Router();

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.get("/user", userInfo);

export default router;
