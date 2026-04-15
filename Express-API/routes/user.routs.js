const express = require("express");

const route = express.Router();

route.get("/" , (req,res) => {
    res.status(401).json({"msg" : "Access Denied.!!!"});
})

module.exports = route;