export const userInfo = async (req, res) => {
  const user = req.user;
  res.json({ username: user.username });
};
