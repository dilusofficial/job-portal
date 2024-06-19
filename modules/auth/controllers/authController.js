import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../../../errors/customErrors.js";
import User from "../../../models/UserModel.js";
import { comparePassword, hashPassword } from "../../../utils/bcryptutils.js";
import { createJWT } from "../../../utils/jwtUtils.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) throw new NotFoundError("user not found");
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");
  const token = createJWT({ userId: user._id, username: user.username });
  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,

    expires: new Date(Date.now() + tenDay),
    secure: false,
  });
  res.status(201).json({ msg: "logged in successfully" });
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const existing = await User.findOne({ email: email });
  if (existing) throw new BadRequestError("Email already exist");
  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  const token = createJWT({ userId: newUser._id, username: newUser.username });
  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,

    expires: new Date(Date.now() + tenDay),
    secure: false,
  });
  res.status(201).json({ msg: "registered successfully" });
};

export const forgotPassword = (req, res) => {
  res.render("auth/forgotPassword.ejs");
};

export const logoutUser = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "successfully logged out" });
};

export const googleLogin = async (req, res) => {
  const { email, username } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const token = createJWT({
      userId: user._id,
      username: user.username,
    });
    const tenDay = 1000 * 60 * 60 * 24 * 10;
    res.cookie("token", token, {
      httpOnly: true,

      expires: new Date(Date.now() + tenDay),
      secure: false,
    });
    res.status(200).json({ msg: "successfully logged in" });
  } else {
    const newUser = new User({
      username,
      email,
    });
    await newUser.save();
    const token = createJWT({
      userId: newUser._id,
      username: newUser.username,
    });
    const tenDay = 1000 * 60 * 60 * 24 * 10;
    res.cookie("token", token, {
      httpOnly: true,

      expires: new Date(Date.now() + tenDay),
      secure: false,
    });
    res.status(201).json({ msg: "registered successfully" });
  }
};
