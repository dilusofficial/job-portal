export const home = (req, res) => {
  res.render("./user/index.ejs", { pageType: "Home" });
};

export const about = (req, res) => {
  res.render("./user/index.ejs", { pageType: "About" });
};

export const contact = (req, res) => {
  res.render("./user/index.ejs", { pageType: "Contact" });
};
