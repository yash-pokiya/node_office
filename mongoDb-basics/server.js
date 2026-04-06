require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3002;
const app = express();
const userModel = require("./model/user.model");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.end("heyy from home page.!!!");
});

// CRUD

// create
app.get("/create", async (req, res) => {
  // const body = req.body;
  let createdUser = await userModel.create({
    username: "test 5",
    email: "test5@gmail.com",
    name: "test 5",
  });
  res.json({ createdUser });
});

// read
// all user
app.get("/all", async (req, res) => {
  const allUser = await userModel.find();
  return res.json(allUser);
});
// specific user - first only
app.get("/read", async (req, res) => {
  const user = await userModel.findOne({ username: "test 2" });
  return res.json(user);
});
// all user based on query
app.get("/user", async (req, res) => {
  const userData = await userModel.find({ username: "test 5" });
  return res.json(userData);
});
// update
app.get("/update", async (req, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { username: "yash18" }, // Find Query
    { email: "yashpokiya@gmail.com" , username : "yash"}, // Update Query
    { new: true },
  );
  res.json(updatedUser)
});

// delete
app.get("/delete" , async(req,res) => {
    const deletedUser = await userModel.findOneAndDelete({username : "test "});
    // res.json(deletedUser);
    res.redirect("/all")
})

app.listen(port, () => {
  console.log(`server run at port ${port}`);
});
