import { UnauthenticatedError } from "../errors/customErrors.js";
import User from "../models/UserModel.js";
import { verifyJWT } from "../utils/jwtUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("unable to access");
  try {
    const { userId } = verifyJWT(token);
    req.user = await User.findById(userId);
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("invalid authorization");
  }
};
