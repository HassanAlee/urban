const passwordUtility = require("../utils/password");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
// register user
const registerUser = async (req, res) => {
  try {
    const { email, password, phone, name, city, zip, street } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }
    const salt = await passwordUtility.genSalt();
    const hash = await passwordUtility.hashPassword(password, salt);
    const newUser = new User({
      email,
      password: hash,
      phone,
      name,
      city,
      zip,
      street,
      image: req?.file?.path,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
      })
      .status(201)
      .json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    const isPasswordValid = await passwordUtility.validatePassword(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const { password: pass, ...rest } = existingUser._doc;
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ message: "Login successful", user: rest });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
// validate user
const validateUser = async (req, res) => {
  try {
    const user = req.uId;
    return res.status(200).json({ message: "verified" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { registerUser, loginUser, validateUser };
