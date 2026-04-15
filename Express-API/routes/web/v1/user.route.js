const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { registerUser , loginUser , profile} = require("../../../controllers/user.controller");
const authMiddleware = require("../../../middlewares/user.middleware")
// register user
// second validation --> use express validator package

// register
router.post(
  "/register",
  [ 
    body("username")
      .isLength({ min: 4 })
      .withMessage("username must be 4 characters long"),
    body("email").isEmail().withMessage("username must be 4 characters long"),
    body("username")
      .isLength({ min: 6 })
      .withMessage("password must be 6 characters long"),
  ],
  registerUser,
);

// login
router.post("/login", [
  body("email").isEmail().withMessage("Enter Valid Email.!!!"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be 6  character or long.!!!"),
] , loginUser);

// show profile
router.get("/profile" , authMiddleware , profile)

module.exports = router;
