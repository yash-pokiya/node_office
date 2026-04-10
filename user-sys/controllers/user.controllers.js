const express = require("express");
const bcrypt = require("bcrypt");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const postModel = require("../models/post.model");

const homePage = (req, res) => {
  const token = req.cookies?.token;
   if (!token) {
    return res.render("index");
  }
    const decode = jwt.verify(token, secret);
    const userEmail = decode.email;
  if (userEmail) {
    res.redirect("/profile");
  } else {
    return res.render("index");
  }
};

const signUpGet = (req, res) => {
  return res.render("signup");
};

const postGet = async (req, res) => {
  return res.render("post");
};

const createPost = async (req, res) => {
  const user = await userModel.findOne({ email: req.email }).populate("posts");
  const { title, description } = req.body;
  console.log(req.file);
  const createdPost = await postModel.create({
    userId: user._id,
    title,
    description,
    imgUrl: req.file.filename,
  });
  //  push post into userModel
  user.posts.push(createdPost);
  await user.save();
  return res.redirect("profile");
};

const editProfilePost = async (req, res) => {
  const { image, fullname, username, email, phone, password } = req.body;
  if (!password) {
    const user = await userModel
      .findOne({ email: req.email })
      .populate("posts");
    const UpdatedUser = await userModel.findOneAndUpdate(
      { email: req.email },
      { image: req.file.filename, fullname, username, email, phone },
      { new: true },
    );
    return res.redirect("/profile");
  } else {
    const hash = await bcrypt.hash(password, 10);
    const UpdatedUser = await userModel.findOneAndUpdate(
      { email: req.email },
      {
        image: req.file.filename,
        fullname,
        username,
        email,
        phone,
        password: hash,
      },
      { new: true },
    );
    return res.redirect("/profile");
  }
};

const editProfile = async (req, res) => {
  const user = await userModel.findOne({ email: req.email }).populate("posts");

  return res.render("editProfile", { user, posts: user.posts });
};

const profile = async (req, res) => {
  const user = await userModel.findOne({ email: req.email }).populate("posts");
  return res.render("profile", { user, posts: user.posts });
};

const createUser = async (req, res) => {
  const { email, username, image, password, fullname, phone } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await userModel.create({
    username,
    fullname,
    email,
    phone,
    image,
    password: hash,
  });

  res.redirect("/");
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await userModel.findOne({ email });
  if (!loginUser) return res.redirect("/signup");
  const isPassMatch = await bcrypt.compare(password, loginUser.password);
  if (isPassMatch) {
    const token = jwt.sign({ email: loginUser.email }, secret);
    res.cookie("token", token);
    res.redirect("/profile");
  } else {
    return res.json({ msg: "Something went wrong.!!!" });
  }
};

const logOut = (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
};

const editPost = async(req,res) => {
  const postId = req.params.id;
  const post = await postModel.findOne({_id : postId});
  return res.render("editpost" , {post : post})
}
const editPostpostReq = async(req,res) => {
  const postId = req.params.id;
  const {title , description} = req.body;
  await postModel.findOneAndUpdate({_id : postId} , {title , description} , {new : true});
  res.redirect("/profile");
}

const deletePost = async (req, res) => {
  const user = await userModel.findOne({ email: req.email }).populate("posts");
  const postId = req.params.id;
  await postModel.findOneAndDelete({ _id: postId });
  const postNumber = user.posts.indexOf(postId);
  user.posts.splice(postNumber, 1);
  await user.save();
  return res.redirect("/profile");
};

module.exports = {
  homePage,
  signUpGet,
  postGet,
  createPost,
  profile,
  createUser,
  login,
  logOut,
  editProfile,
  editProfilePost,
  deletePost,
  editPost,
  editPostpostReq
};
