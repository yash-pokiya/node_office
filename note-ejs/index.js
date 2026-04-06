// ejs --> light weight templet engine
// ejs --> you can write dynamic html with help of ejs

require("dotenv").config();
const express = require("express");
const fs = require("fs");
const port = process.env.PORT || 3002;
const app = express();
app.set("view engine" , "ejs")
// if you want to use ejs view engine then must create views folder
// if you want to read frontend data then you have to must add below few lines 
app.use(express.json()); // read data from body (read all type data ) 
app.use(express.urlencoded({extended : true})); // read form data only 

// ========== Task File Generator ==========
app.get("/" , (req,res) => {
    fs.readdir("./Tasks" , (err,files) => {
        if(err) throw err;
    return res.render("index" , {data : files})
    })
    // return res.end("heyy from home page..!!!");
})

// Method post --> data  --> res.body
// method get --> data --> res.params

// Create file 
app.post("/create" , (req,res) => {
    // return res.send(req.body)
    let data = `title : ${req.body.title}\n details : ${req.body.details}`
    // create file
    fs.writeFile(`./Tasks/${req.body.title.split(" ").join("_")}.txt` , data , (err) => {
        if(err) throw err;
    })
    res.redirect("/");
});

// open file

app.get("/open/:filename" , (req,res) => {
    fs.readFile(`./Tasks/${req.params.filename}` , "utf-8" , (err,data) => {
        if(err) throw err;
        return res.render('file' , {data : data});
    })
})

// edit file
app.get("/edit/:filename" , (req,res) => {
    let old = req.params.filename;
    res.render("edit" , {old})
})

app.post("/rename" , (req,res) => {
    // console.log(req.body.old);
    let {old , new : newName } = req.body;
    console.log(newName)
    old = old.replace('.txt', '');
    newName = newName.replace('.txt', '');
     fs.rename(`./Tasks/${old}.txt`, `./Tasks/${newName}.txt`, (err) => {
        if(err) throw err;
    })
        return res.redirect('/');
})

app.listen(port , () => {
    console.log(`server running at port ${port}`)
})
