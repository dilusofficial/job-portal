import { Router } from "express";
import {
  companyProfile,
  updateCompanyProfile,
} from "../controllers/employerDashboardController.js";
import { validateCompanyProfileInput } from "../../../middleware/validationMiddleware.js";

const router = Router();
router.post(
  "/company-profile",
  validateCompanyProfileInput,
  updateCompanyProfile
);
router.get("/company-profile", companyProfile);

export default router;
