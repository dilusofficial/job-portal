import {
  BadRequestError,
  NotFoundError,
} from "../../../errors/customErrors.js";
import { formatImage } from "../../../middleware/multerMiddleware.js";
import Employer from "../../../models/EmployerModel.js";
import Job from "../../../models/JobModel.js";
import { v2 as cloudinary } from "cloudinary";

export const updateCompanyProfile = async (req, res) => {
  const employer = await Employer.findById(req.user.employerId);
  if (!employer) throw new NotFoundError("Employer not found");
  employer.companyName = req.body.companyName;
  employer.companyEmail = req.body.companyEmail;
  employer.companyContact = req.body.companyContact;
  employer.founded = req.body.founded;
  employer.size = req.body.size;
  employer.industry = req.body.industry;
  employer.website = req.body.website;
  employer.facebook = req.body.facebook;
  employer.twitter = req.body.twitter;
  employer.linkedin = req.body.linkedin;
  employer.country = req.body.country;
  employer.state = req.body.state;
  employer.companyAddress = req.body.companyAddress;
  employer.about = req.body.about;
  await employer.save();
  res.status(200).json({ msg: "company details added successfully" });
};

export const companyProfile = async (req, res) => {
  const employer = await Employer.findById(req.user.employerId);
  if (!employer) throw new NotFoundError("Employer not found");
  res.status(200).json(employer);
};

export const addNewJob = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const newJob = new Job({
    jobTitle: req.body.jobTitle,
    description: req.body.description,
    category: req.body.category,
    jobType: req.body.jobType,
    jobLocation: req.body.jobLocation,
    salary: req.body.salary,
    deadline: req.body.deadline,
    qualification: req.body.qualification,
    experience: req.body.experience,
    gender: req.body.gender,
    owner: req.user.employerId,
    skills: skillsArray,
  });
  await newJob.save();
  res.status(201).json({ msg: "Job added successfully" });
};

export const getEmployerJobs = async (req, res) => {
  const jobs = await Job.find({ owner: req.user.employerId });
  if (!jobs) throw new NotFoundError("No Jobs Found");
  res.status(200).json(jobs);
};

export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) throw new NotFoundError("No Job found");
  res.status(200).json(job);
};

export const editJob = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const job = await Job.findById(req.params.id);
  if (!job) throw new NotFoundError("No job found");
  job.jobTitle = req.body.jobTitle;
  job.description = req.body.description;
  job.category = req.body.category;
  job.jobType = req.body.jobType;
  job.jobLocation = req.body.jobLocation;
  job.salary = req.body.salary;
  job.deadline = req.body.deadline;
  job.qualification = req.body.qualification;
  job.experience = req.body.experience;
  job.gender = req.body.gender;
  job.owner = req.user.employerId;
  job.skills = skillsArray;
  await job.save();
  res.status(200).json({ msg: "Job updated successfully" });
};

export const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) throw new NotFoundError("no jobs found");
  res.status(200).json({ msg: "Job deleted successfully" });
};

export const deleteAccount = async (req, res) => {
  const account = await Employer.findByIdAndDelete(req.user.employerId);
  if (!account) throw new NotFoundError("no account has been found");
  res.status(200).json({ msg: "account has been deleted" });
};

export const logoUpload = async (req, res) => {
  const seeker = await Employer.findById(req.user.employerId);
  if (!seeker) throw new NotFoundError("No user found");
  if (req.file) {
    const file = formatImage(req.file);
    if (seeker.logoPublicId) {
      await cloudinary.uploader.destroy(seeker.logoPublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    seeker.logo = response.secure_url;
    seeker.logoPublicId = response.public_id;
    await seeker.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};
