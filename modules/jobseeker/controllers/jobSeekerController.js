import { NotFoundError } from "../../../errors/customErrors.js";
import { formatImage } from "../../../middleware/multerMiddleware.js";
import Employer from "../../../models/EmployerModel.js";
import Job from "../../../models/JobModel.js";
import JobSeeker from "../../../models/JobSeeker.js";
import User from "../../../models/UserModel.js";
import { v2 as cloudinary } from "cloudinary";

export const saveData = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const languagesArray = req.body.languages
    .split(",")
    .map((item) => item.trim());
  const locationArray = req.body.preferredLocation
    .split(",")
    .map((item) => item.trim());
  const jobseeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!jobseeker) throw new NotFoundError("no candidate was found");
  jobseeker.education = req.body.education;
  jobseeker.work = req.body.work;
  jobseeker.projects = req.body.projects;
  jobseeker.certificates = req.body.certificates;
  jobseeker.fullName = req.body.fullName;
  jobseeker.currentSalary = req.body.currentSalary;
  jobseeker.expectedSalary = req.body.expectedSalary;
  jobseeker.totalExperience = req.body.totalExperience;
  jobseeker.about = req.body.about;
  jobseeker.preferredLocation = locationArray;
  jobseeker.skills = skillsArray;
  jobseeker.languages = languagesArray;
  jobseeker.dataCollected = true;
  await jobseeker.save();
  res.status(200).json({ msg: "details added successfully" });
};

export const getAllJobs = async (req, res) => {
  const jobs = (await Job.find().populate("owner")).reverse();
  if (!jobs) throw new NotFoundError("No jobs found");
  res.status(200).json(jobs);
};

export const getsingleJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id).populate("owner");
  console.log();
  if (!job) throw new NotFoundError("No job found");
  res.status(200).json(job);
};

export const getAllCompanies = async (req, res) => {
  const companies = await Employer.find({ companyName: { $exists: true } });
  if (!companies) throw new NotFoundError("no companies found");
  res.status(200).json(companies);
};

export const getSingleCompany = async (req, res) => {
  const { id } = req.params;
  const company = await Employer.findById(id);
  if (!company) throw new NotFoundError("No company found");
  res.status(200).json(company);
};

export const getCompanyActiveJobs = async (req, res) => {
  const { id } = req.params;
  const jobs = await Job.find({ owner: id, isActive: true }).populate("owner");
  if (!jobs) throw new NotFoundError("No active jobs found");
  res.status(200).json(jobs);
};

export const deleteMyAccount = async (req, res) => {
  const user = await JobSeeker.findByIdAndDelete(req.user.jobseekerId);
  if (!user) throw new NotFoundError("no user detected");
  res.status(200).json({ msg: "account has been deleted" });
};

export const GetJobSeeker = async (req, res) => {
  const user = await JobSeeker.findById(req.user.jobseekerId).populate("owner");
  if (!user) throw new NotFoundError("no user detected");
  res.status(200).json(user);
};

export const updatebasicDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  const user = await User.findById(req.user.userId);
  if (!seeker || !user)
    throw new NotFoundError("no jobseeker or user detected");
  seeker.fullName = req.body.fullName;
  seeker.profilePic = req.body.profilePic;
  seeker.resume = req.body.resume;
  seeker.qualification = req.body.qualification;
  user.age = req.body.age;
  user.dateOfBirth = req.body.dateOfBirth;
  user.address = req.body.address;
  user.email = req.body.email;
  await user.save();
  await seeker.save();
  const updated = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  res.status(200).json({ msg: "success", updated });
};

export const updateeducationDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.education = req.body.education;
  seeker.dataCollected = true;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const updateworkDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.work = req.body.work;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const updateprofessionalDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.certificates = req.body.certificates;
  seeker.projects = req.body.projects;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const updatepreferences = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const languagesArray = req.body.languages
    .split(",")
    .map((item) => item.trim());
  const locationArray = req.body.preferredLocation
    .split(",")
    .map((item) => item.trim());
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.currentSalary = req.body.currentSalary;
  seeker.expectedSalary = req.body.expectedSalary;
  seeker.totalExperience = req.body.totalExperience;
  seeker.preferredLocation = locationArray;
  seeker.skills = skillsArray;
  seeker.languages = languagesArray;
  seeker.portfolio = req.body.portfolio;
  seeker.github = req.body.github;
  seeker.about = req.body.about;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const uploadProfilePicture = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!seeker) throw new NotFoundError("No jobseeker found");
  if (req.file) {
    const file = formatImage(req.file);
    if (seeker.picPublicId) {
      await cloudinary.uploader.destroy(seeker.picPublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    seeker.profilePic = response.secure_url;
    seeker.picPublicId = response.public_id;
    await seeker.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};

export const uploadResume = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!seeker) throw new NotFoundError("No jobseeker found");
  if (req.file) {
    const file = formatImage(req.file);
    if (seeker.resumePublicId) {
      await cloudinary.uploader.destroy(seeker.resumePublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    seeker.resume = response.secure_url;
    seeker.resumePublicId = response.public_id;
    await seeker.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};
