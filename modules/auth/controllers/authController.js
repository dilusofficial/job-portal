export const login = (req, res) => {
  res.render("auth/login.ejs");
};

export const register = (req, res) => {
  res.render("auth/register.ejs");
};

export const forgotPassword = (req, res) => {
  res.render("auth/forgotPassword.ejs");
};
