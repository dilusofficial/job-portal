import mongoose, { Schema, model } from "mongoose";

const EmployerSchema = new Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    logo: {
      type: String,
    },
    logoPublicId: {
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
  },
  { timestamps: true }
);

const Employer = model("Employer", EmployerSchema);
export default Employer;
