import { Router } from "express";
import { validateUserDetailInput } from "../../../middleware/validationMiddleware.js";
import {
  addUserDetails,
  saveEmployer,
  saveJobSeeker,
  uploadImage,
} from "../controllers/userController.js";
import upload from "../../../middleware/multerMiddleware.js";

const router = Router();

router.post("/details", validateUserDetailInput, addUserDetails);
router.post("/save-employer", saveEmployer);
router.post("/save-jobseeker", saveJobSeeker);
router.post("/image-upload", upload.single("image"), uploadImage);

export default router;
