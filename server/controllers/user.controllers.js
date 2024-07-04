const passwordUtility = require("../utils/password");
const User = require("../models/user.model.js");
// register user
const registerUser = async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }
    const salt = await passwordUtility.genSalt();
    const hash = await passwordUtility.hashPassword(password, salt);
    console.log(salt, hash);
    const newUser = new User({ email, password: hash, phone });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { registerUser };
