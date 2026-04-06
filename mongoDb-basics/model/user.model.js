const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongoBasics");

// Schema ==> document structure ==> how document looking and validation

const UserSchema = mongoose.Schema({
    username : String,
    email : String,
    name : String,
})

module.exports = mongoose.model("user" , UserSchema)