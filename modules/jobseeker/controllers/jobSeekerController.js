import { NotFoundError } from "../../../errors/customErrors.js";
import Employer from "../../../models/EmployerModel.js";
import Job from "../../../models/JobModel.js";
import JobSeeker from "../../../models/JobSeeker.js";

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

export const getAllCompanies = async (req, res) => {
  const companies = await Employer.find({ companyName: { $exists: true } });
  if (!companies) throw new NotFoundError("no companies found");
  res.status(200).json(companies);
};
