import { Router } from "express";
import {
  getAllCompanies,
  getAllJobs,
  saveData,
} from "../controllers/jobSeekerController.js";
import { validateJobseekerDetailInput } from "../../../middleware/validationMiddleware.js";

const router = Router();

router.post("/data", validateJobseekerDetailInput, saveData);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id");
router.get("/companies", getAllCompanies);
router.get("/companies/:id");
export default router;
