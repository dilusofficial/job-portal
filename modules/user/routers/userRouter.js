import { Router } from "express";
import { validateUserDetailInput } from "../../../middleware/validationMiddleware.js";
import {
  addUserDetails,
  saveEmployer,
  saveJobSeeker,
} from "../controllers/userController.js";

const router = Router();

router.post("/details", validateUserDetailInput, addUserDetails);
router.post("/save-employer", saveEmployer);
router.post("/save-jobseeker", saveJobSeeker);

export default router;
