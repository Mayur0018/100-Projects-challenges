import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { genrateToken } from "../utils/genrateToken.js";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({
        error: "User already exists with this email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      status: "Success",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return res.status(400).json({
      error: "Ivalid Email Or Password",
    });
  }

  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    return req.status(401).json({ error: "Invalid Email or password" });
  }
  // genrate jwt token
  const token = genrateToken(user.id, res);
  res.status(201).json({
    status: "Success",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    },
  });
};

const logout = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    status: "success",
    message: "Logged Out SuccessFully",
  });
};
export { register, login,logout };
