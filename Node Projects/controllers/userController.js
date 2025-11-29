const aysncHandler = require("express-async-handler");
const registerUser = aysncHandler(async (req, res) => {
  res.json({ message: "Register The User" });
});

const LoginUser = aysncHandler(async (req, res) => {
  res.json({ message: "Login The User" });
});
const currentUser = aysncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});
module.exports = { registerUser, LoginUser, currentUser };
