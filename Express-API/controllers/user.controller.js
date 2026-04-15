const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");

const registerUser = async (req, res) => {
  console.log('register API fetched from frontend');

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.array()
    });
  }

  const { username, email, password } = req.body;

  const isExist = await userModel.findOne({ email });
  if (isExist) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    username,
    email,
    password: hashPassword,
  });

  const token = await user.generateAuthToken();

  res.status(200).json({ token, user });
};

const loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  const isExist = await userModel.findOne({ email: email }).select("+password");
  if (!isExist) {
    return res.status(401).json({ msg: "User Not Registered.!!!" });
  }
  const isPassMatch = await isExist.comparePassword(password);
  if (!isPassMatch) return res.status(400).json({ msg: "Wrong Password.!!!" });
  const token = isExist.generateAuthToken();
  res.cookie("token" , token)
  return res.status(200).json({ token, isExist });
};

const profile = (req,res) => {
  return res.status(200).json({user : req.user});
}

module.exports = { registerUser, loginUser , profile };
