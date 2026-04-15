const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()

// database validation
const userSchema = mongoose.Schema({
    username : {
        type : String,
        minlength : 4,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        select : false // find query -- select false --> response ma add no thay 
    },
    role : {
        type: String,
        enum : ["user" , "admin"],
        default : "user"
    }
})

// jwt token

userSchema.methods.generateAuthToken = function () {
    console.log("function is running")
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  return token;
};//this.id --> database user's i_d 

// bcrypt
//hash(static)
userSchema.statics.hashPassword =async function(password){
    let hash = await bcrypt.hash(password , 10);
    return hash;
}
// compare (methods)
userSchema.methods.comparePassword = async function (password) {
    let result = await bcrypt.compare(password , this.password);
    return result;
} //this.password --> database user's password 


module.exports = mongoose.model("user" , userSchema);