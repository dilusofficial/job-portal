import { Router } from "express";
import {
  deleteMyAccount,
  getAllCompanies,
  getAllJobs,
  getCompanyActiveJobs,
  GetJobSeeker,
  getSingleCompany,
  getsingleJob,
  saveData,
} from "../controllers/jobSeekerController.js";
import { validateJobseekerDetailInput } from "../../../middleware/validationMiddleware.js";

const router = Router();

router.get("/", GetJobSeeker);
router.delete("/", deleteMyAccount);
router.post("/data", validateJobseekerDetailInput, saveData);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getsingleJob);
router.get("/companies", getAllCompanies);
router.get("/companies/:id", getSingleCompany);
router.get("/active-jobs/:id", getCompanyActiveJobs);

export default router;
