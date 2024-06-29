import mongoose, { Schema, model } from "mongoose";

const EducationSchema = new Schema({
  programme: String,
  institution: String,
  started: Date,
  ended: Date,
  isCurrent: Boolean,
  courses: String,
});
const WorkSchema = new Schema({
  jobTitle: String,
  company: String,
  started: Date,
  ended: Date,
  isWorking: Boolean,
  achievements: String,
});
const ProjectSchema = new Schema({
  project: String,
  started: Date,
  ended: Date,
  isCurrent: Boolean,
  description: String,
});
const CertificateSchema = new Schema({
  certificate: String,
  started: Date,
  ended: Date,
  description: String,
});

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    fullName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
    },
    image: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
    },
    address: {
      type: String,
    },
    totalExperience: {
      type: String,
    },
    resume: {
      type: String,
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
    currentSalary: {
      type: String,
    },
    expectedSalary: { type: String },
    preferredLocation: {
      type: [String],
    },
    skills: {
      type: [String],
    },
    languages: {
      type: [String],
    },
    about: {
      type: String,
    },
    appliedJobs: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    shortListed: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    twitter: {
      type: String,
    },
    education: {
      type: [EducationSchema],
    },
    work: {
      type: [WorkSchema],
    },
    projects: {
      type: [ProjectSchema],
    },
    certificates: {
      type: [CertificateSchema],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);

export default User;
