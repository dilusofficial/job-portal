import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../../../errors/customErrors.js";
import Employer from "../../../models/EmployerModel.js";
import User from "../../../models/UserModel.js";
import { comparePassword, hashPassword } from "../../../utils/bcryptutils.js";
import { createJWT } from "../../../utils/jwtUtils.js";
import { client, generateOtp } from "../../../utils/twilioutils.js";

export const login = async (req, res) => {
  const { email, password, role } = req.body;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const user = await Model.findOne({ email: email });
  if (!user) throw new NotFoundError("user not found");
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");
  const token = createJWT({
    userId: user._id,
    username: user.username,
    role: user.role,
  });

  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + tenDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(201).json({ msg: "logged in successfully" });
};

export const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const existing = await Model.findOne({ email: email });
  if (existing) throw new BadRequestError("Email already exist");
  const hashedPassword = await hashPassword(password);
  const newUser = new Model({
    username,
    email,
    password: hashedPassword,
    role,
  });
  await newUser.save();
  const token = createJWT({
    userId: newUser._id,
    username: newUser.username,
    role: newUser.role,
  });
  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + tenDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(201).json({ msg: "registered successfully" });
};

export const forgotPassword = async (req, res) => {
  const { phone, role } = req.body;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const user = await Model.findOne({ phone: phone });
  if (!user) throw new NotFoundError("no user found");
  await client.messages.create({
    body: `Your key is ${user._id}`,
    from: process.env.TWILIO_PH,
    to: phone,
  });
  res.status(200).json({ msg: "KEY has been sent" });
};

export const resetPassword = async (req, res) => {
  const { id, password, role } = req.body;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const user = await Model.findById(id);
  if (!user) throw new NotFoundError("No user found");
  const hashedPassword = await hashPassword(password);
  user.password = hashedPassword;
  await user.save();
  res.status(200).json({ msg: "password reset" });
};

export const logoutUser = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "successfully logged out" });
};

export const googleLogin = async (req, res) => {
  const { email, username, role } = req.body;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const user = await Model.findOne({ email: email });
  if (user) {
    const token = createJWT({
      userId: user._id,
      username: user.username,
      role: user.role,
    });
    const tenDay = 1000 * 60 * 60 * 24 * 10;
    res.cookie("token", token, {
      httpOnly: true,

      expires: new Date(Date.now() + tenDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ msg: "successfully logged in" });
  } else {
    const newUser = new Model({
      username,
      email,
      role,
    });
    await newUser.save();
    const token = createJWT({
      userId: newUser._id,
      username: newUser.username,
      role: newUser.role,
    });
    const tenDay = 1000 * 60 * 60 * 24 * 10;
    res.cookie("token", token, {
      httpOnly: true,

      expires: new Date(Date.now() + tenDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(201).json({ msg: "registered successfully" });
  }
};

export const sendOTP = async (req, res) => {
  const { phone } = req.body;
  const { role } = req.user;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const existing = await Model.findOne({ phone: phone });
  if (existing) throw new BadRequestError("Phone number already registered");
  const otp = generateOtp();
  const user = await Model.findById(req.user.userId);
  if (!user) throw new NotFoundError("No user found");
  user.phone = phone;
  user.otp = otp;
  await user.save();
  await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PH,
    to: phone,
  });
  res.status(200).json({ msg: "success" });
};

export const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const { role } = req.user;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const user = await Model.findById(req.user.userId);
  if (!user) throw new NotFoundError("No user found");
  if (user.otp === otp) {
    user.hasVerified = true;
    await user.save();
    res.status(200).json({ msg: "verified", role });
  } else {
    throw new UnauthorizedError("Invalid OTP");
  }
};

export const userInfo = async (req, res) => {
  const { role, userId } = req.user;
  let Model = null;
  if (role === "candidate") {
    Model = User;
  } else if (role === "employer") {
    Model = Employer;
  }
  const user = await Model.findById(userId);
  if (!user) throw new NotFoundError("No user found");
  res
    .status(200)
    .json({ id: user._id, username: user.username, role: user.role });
};
