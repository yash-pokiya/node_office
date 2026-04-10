const express = require("express")
const route = express.Router()
const {homePage, signUpGet , postGet , createPost , profile , createUser ,login , logOut , editProfile , editProfilePost , deletePost , editPost , editPostpostReq} = require("../controllers/user.controllers")
const authMiddleware = require("../middleware/auth")
const upload = require("../config/multer")

// Frontend logic and render pages
route.get("/" ,homePage)

route.get("/signup" , signUpGet)

route.get("/post" , authMiddleware ,postGet);

route.get("/profile" , authMiddleware , profile)

route.get("/editprofile" , authMiddleware , editProfile)

route.get("/editpost/:id" , authMiddleware , editPost)

//bakend post routes

route.post("/post" , authMiddleware , upload.single("imgUrl") , createPost)

route.post("/editprofile" , authMiddleware , upload.single("image") , editProfilePost)

route.post("/create" , createUser)

route.post("/editpost/:id" , authMiddleware , editPostpostReq)

route.post("/login" , login)

route.get("/delete/:id" , authMiddleware , deletePost)
//Logout
route.get("/logout" , logOut)
module.exports = route;