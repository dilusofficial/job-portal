import {
  BadRequestError,
  NotFoundError,
} from "../../../errors/customErrors.js";
import Employer from "../../../models/EmployerModel.js";
import JobSeeker from "../../../models/JobSeeker.js";
import User from "../../../models/UserModel.js";

export const addUserDetails = async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  if (!user) throw new NotFoundError("No user found");
  const hobbiesArray = req.body.hobbies.split(",").map((item) => item.trim());
  const interestArray = req.body.interest.split(",").map((item) => item.trim());
  user.age = req.body.age;
  user.address = req.body.address;
  user.dateOfBirth = req.body.dateOfBirth;
  user.hobbies = hobbiesArray;
  user.interest = interestArray;
  user.gender = req.body.gender;
  user.smoking = req.body.smoking;
  user.drinking = req.body.drinking;
  user.highestQualification = req.body.highestQualification;
  await user.save();
  res.status(200).json({ msg: "details added successfully", user });
};

export const saveEmployer = async (req, res) => {
  const employer = await Employer.findOne({ owner: req.user.userId });
  if (employer) {
    res.status(200).json({ msg: "success", employer });
  } else {
    const newEmployer = new Employer({
      owner: req.user.userId,
    });
    await newEmployer.save();
    res.status(201).json({ msg: "success", newEmployer });
  }
};

export const saveJobSeeker = async (req, res) => {
  const jobseeker = await JobSeeker.findOne({ owner: req.user.userId });
  if (jobseeker) {
    res.status(200).json({ msg: "success", jobseeker });
  } else {
    const newSeeker = new JobSeeker({
      owner: req.user.userId,
    });
    await newSeeker.save();
    res.status(201).json({ msg: "success", newSeeker });
  }
};
