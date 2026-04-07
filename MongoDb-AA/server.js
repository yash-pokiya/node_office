require("dotenv").config();
const express = require("express");
const port = process.env.port || 3002;
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./model/user.model");
// server menory temperory
// user ni request server pase jai tyare server ne  , user kon chhe e khb hoti nathi
// ex. login req -> server ne khb no hoy ke user kon chhe.
// cookie parser --> save jwt in browser in cookie storage
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data --> convert into jwt --> set & save cookie
app.get("/", (req, res) => {
  res.cookie("username", "test@user");
  return res.end("Heyy from home page.!!!");
});

app.get("/jwt", (req, res) => {
  let data = { username: "test", email: "text@gmail.com", role: "Admin" };
  const token = jwt.sign(data, process.env.JWT_SECRET);
  res.cookie("token", token);
  console.log(token);
  return res.send("Go to application and check your cookies.!!!");
});

app.get("/signup", async (req, res) => {
  const createdUser = await userModel.create({
    username: "test_user",
    email: "test@gmail.com",
    password: "test1234",
  });
  res.send({ createdUser });
});

// for encrypt your password use --> bcrypt package
// use case : when your server is data leack your password is safe , if you encrypt your all user password
// encrypt password stages :
// your password + salt (default 10 char ) => create a hash
// in database we save hash not password

app.get("/hash",  (req, res) => {
  let password = "test@1234";
  bcrypt.hash(password, 10, (err, hash) => {
    if(err) console.log(err.message)
    console.log(hash);
    res.send(`hashed password is : ${hash}`, );
  });
});

app.listen(port, () => {
  console.log(`server run at port ${port}`);
  console.log(`http://localhost:${port}/`);
});
