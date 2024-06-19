import { UnauthenticatedError } from "../../../errors/customErrors.js";
import { verifyJWT } from "../../../utils/jwtUtils.js";

export const home = (req, res) => {
  res.render("./user/index.ejs", { pageType: "Home" });
};

export const about = (req, res) => {
  res.render("./user/index.ejs", { pageType: "About" });
};

export const contact = (req, res) => {
  res.render("./user/index.ejs", { pageType: "Contact" });
};

export const userInfo = async (req, res) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("unable to access");
  try {
    const { userId, username } = verifyJWT(token);
    res.json({ userId, username });
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("invalid authorization");
  }
};
