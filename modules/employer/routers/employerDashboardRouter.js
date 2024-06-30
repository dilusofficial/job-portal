import { Router } from "express";
import {
  addNewJob,
  companyProfile,
  getEmployerJobs,
  updateCompanyProfile,
} from "../controllers/employerDashboardController.js";
import {
  validateCompanyProfileInput,
  validatePostJobInput,
} from "../../../middleware/validationMiddleware.js";
import { checkCompany } from "../../../middleware/authMiddleware.js";

const router = Router();
router.post(
  "/company-profile",
  validateCompanyProfileInput,
  updateCompanyProfile
);
router.get("/company-profile", companyProfile);
router.get("/job", getEmployerJobs);
router.post("/job", validatePostJobInput, checkCompany, addNewJob);

export default router;
