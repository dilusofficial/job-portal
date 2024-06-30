import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import Employer from "../models/EmployerModel.js";
import User from "../models/UserModel.js";
import { verifyJWT } from "../utils/jwtUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("unable to access");
  try {
    const { userId, username, role } = verifyJWT(token);
    req.user = { userId, username, role };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("invalid authorization");
  }
};

export const authenticateEmployer = async (req, res, next) => {
  if (req.user && req.user.role === "employer") {
    next();
  } else {
    throw new UnauthorizedError("Not authorized. Admins only");
  }
};

export const checkCompany = async (req, res, next) => {
  const employer = await Employer.findById(req.user.userId);
  if (employer.companyName) {
    next();
  } else {
    throw new BadRequestError("No company details found.");
  }
};
