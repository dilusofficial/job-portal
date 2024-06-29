import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import Employer from "../models/EmployerModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("username").notEmpty().withMessage("username is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format"),
  body("role").notEmpty().withMessage("Role is required"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format"),
  body("role").notEmpty().withMessage("Role is required"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateCompanyProfileInput = withValidationErrors([
  body("companyName").notEmpty().withMessage("company name is required"),
  body("companyEmail")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (companyEmail, { req }) => {
      const user = await Employer.findOne({ companyEmail });
      if (user && user._id.toString() !== req.user.userId.toString()) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("companyContact")
    .notEmpty()
    .withMessage("company contact is required")
    .custom(async (companyContact, { req }) => {
      const user = await Employer.findOne({ companyContact });
      if (user && user._id.toString() !== req.user.userId.toString()) {
        throw new BadRequestError("Company contact already exists");
      }
    }),
  body("founded").notEmpty().withMessage("founded date is required"),
  body("size").notEmpty().withMessage("company size is required"),
  body("industry").notEmpty().withMessage("industry is required"),
  body("website").notEmpty().withMessage("website is required"),
  body("facebook").notEmpty().withMessage("facebook url is required"),
  body("twitter").notEmpty().withMessage("twitter url is required"),
  body("linkedin").notEmpty().withMessage("linkedin url is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("companyAddress").notEmpty().withMessage("company address is required"),
  body("about").notEmpty().withMessage("about is required"),
]);
