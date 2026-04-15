const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")

const authUser = async(req,res,next) => {
    const token = req.cookies?.token ;

    if(!token){
        return res.status(400).json({message : "Token Expired. Re-Login!!!"})
    }
    try {
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        const user = await userModel.findOne({_id : decode._id});
        if(!user) return res.status(401).json({msg : "Unauthorized.!!!"});
        req.user = user;
        return next();
    } catch (error) {
        return res.status(500).json({error});
    }
}

module.exports = authUser;