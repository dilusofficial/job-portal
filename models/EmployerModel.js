import mongoose, { Schema, model } from "mongoose";

const EmployerSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  logo: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companyEmail: {
    type: String,
  },
  companyContact: {
    type: String,
  },
  website: {
    type: String,
  },
  founded: {
    type: Date,
  },
  size: {
    type: String,
    enum: ["10-50", "50-100", "100-200", "200-400", "400-800", ">800"],
  },
  about: {
    type: String,
  },
  industry: {
    type: String,
    enum: [
      "Information Technology & Telecommunications",
      "Finance & Insurance",
      "Healthcare & Pharmaceuticals",
      "Education & Training",
      "Engineering & Manufacturing",
      "Construction & Real Estate",
      "Retail, Wholesale & E-commerce",
      "Hospitality, Travel & Tourism",
      "Media, Entertainment & Arts",
      "Government, Non-Profit & Public Services",
    ],
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  companyAddress: {
    type: String,
  },
  totalJobs: {
    type: Number,
  },
  activeJobs: {
    type: String,
  },
  shortlisted: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
    default: [],
  },
  role: {
    type: String,
    required: true,
    enum: ["candidate", "employer", "admin"],
  },
  otp: {
    type: String,
  },
  hasVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Employer = model("Employer", EmployerSchema);
export default Employer;
