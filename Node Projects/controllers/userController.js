const aysncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = aysncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All Fileds Are Mandotory");
  }
  const userAvailable = await userModel.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already Registerd");
  }
  const haspaPassword = await bcrypt.hash(password, 10);
  console.log("Passsword is: ", haspaPassword);
  const user = await userModel.create({
    username,
    email,
    password: haspaPassword,
  });

  console.log(`User Have Create SuccesFully: ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User Data is not valid");
  }
  res.json({ message: "Register the user" });
});

const LoginUser = aysncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields Are Mandotroy");
  }
  const user = await userModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});
const currentUser = aysncHandler(async (req, res) => {
  res.json(req.user);
});
module.exports = { registerUser, LoginUser, currentUser };
