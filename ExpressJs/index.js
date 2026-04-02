// Create a Express server 

// Package.json ==> type = module ==> import
// Package.json ==> type = commonjs ==> require

const express = require("express");
const path = require("path")
const app = express();
const port  = 6578;

//MiddleWare ==> MiddleWare was run before route,call before function
// usecase ==> Authentication , Authorization , validation  , error handling 
// user req --> server 
// (server req)server res --> user 

//========== with middleware ==========
// user req --> middleware(server) --> server route

app.use((req,res,next) => {
    console.log('MiddleWare is Running 🏃🏻‍♂️')
    next()
})
// login request --> middleware(check If isUser) --> login route(Profile) --> response

// create a route
app.get("/" , (req,res) => {
    return res.send("Welcome to ExpressJs 😎")
})
app.get("/profile" , (req,res) => {
    return res.send("Show Profile📃")
})
app.get("/login" , (req,res) => {
    const dirPath = path.resolve()
    const filePath = path.join(dirPath , "Pages" , "login.html")
    return res.sendFile(filePath)
})
app.get("/signup" , (req,res) => {
    return res.send("signUp Page.!!!")
})

// error handling : 
//last listed route
// always write after all routes because it will catch all the routes which are not defined.

app.use((req,res) => {
    res.status(404).send("page not found🚫.!!! ")
    res.status(500).send("Something went wrong🌋.!!!")
})

app.listen(port , () => {
    console.log(`Server run at port ${port}`)
})