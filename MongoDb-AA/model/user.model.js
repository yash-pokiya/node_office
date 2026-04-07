const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongodb-AA");

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
},{timeStamps : true});

module.exports = mongoose.model("user" , userSchema);
