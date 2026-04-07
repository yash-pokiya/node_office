require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3002;
const app = express();
const UserModel = require("./models/user.model");
const userModel = require("./models/user.model");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.render("index");
});

// Create Card
app.post("/create", async (req, res) => {
  const { fname, email, uname, img } = req.body;
  const createdCard = await UserModel.create({
    fullname: fname,
    username: uname,
    email: email,
    image: img,
  });
  res.redirect("/card");
});

//Read card
app.get("/card", async (req, res) => {
  const allUsers = await userModel.find();
  return res.render("card", { data: allUsers });
});

//Delete Card
app.get("/delete/:id", async (req, res) => {
  await userModel.findOneAndDelete({ _id: req.params.id });
  return res.redirect("/card");
});

//Update Card
app.get("/update/:id", async (req, res) => {
  const updateUser = await userModel.findOne({ _id: req.params.id });
  return res.render("updateCard", { user: updateUser });
});

app.post("/update/:id", async (req, res) => {
  const { username, name, email, image } = req.body;
  await userModel.findOneAndUpdate(
    { _id: req.params.id },
    {   fullname: name,
        username,
        email,
        image },
    { new: true },
  );
  return res.redirect("/card");
});
app.listen(port, () => {
  console.log(`server run at port ${port}.!!!!`);
});
