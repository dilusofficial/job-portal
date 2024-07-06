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
  updatebasicDetails,
  updateeducationDetails,
  updatepreferences,
  updateprofessionalDetails,
  updateworkDetails,
  uploadProfilePicture,
  uploadResume,
} from "../controllers/jobSeekerController.js";
import {
  validateBasicDetailsInput,
  validateJobseekerDetailInput,
  validatePreferencesInput,
} from "../../../middleware/validationMiddleware.js";
import upload from "../../../middleware/multerMiddleware.js";

const router = Router();

router.get("/", GetJobSeeker);
router.delete("/", deleteMyAccount);
router.post("/data", validateJobseekerDetailInput, saveData);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getsingleJob);
router.get("/companies", getAllCompanies);
router.get("/companies/:id", getSingleCompany);
router.get("/active-jobs/:id", getCompanyActiveJobs);
router.patch("/profile/basic", validateBasicDetailsInput, updatebasicDetails);
router.patch("/profile/education", updateeducationDetails);
router.patch("/profile/work", updateworkDetails);
router.patch("/profile/professional", updateprofessionalDetails);
router.patch(
  "/profile/profile-image",
  upload.single("profilePic"),
  uploadProfilePicture
);
router.patch("/profile/resume", upload.single("resume"), uploadResume);
router.patch(
  "/profile/preferences",
  validatePreferencesInput,
  updatepreferences
);

export default router;
