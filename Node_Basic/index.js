// const fs = require("node:fs");
// const chalk = require("chalk")
import chalk from "chalk";

//fs = file system

// create file
//fs.appendFile(path,data,callBack)
// fs.appendFile("hello.txt" , "hellow world..!" , (err) => {
//     if(err) throw err;
//     console.log('created hello.txt')
// })
// fs.writeFile(path , "data" , callback)
//issue : every time run the file or start the server then put the data at last(append) to existing data

// fs.writeFile("hello.txt", "hellow world..!", (err) => {
//   if (err) throw err;
//   console.log("created hello.txt");
// });
// issue : when you change hello.txt  and after that you run the file that cmd will be the replace whole file with above given data

// create folder 
// fs.mkdir(path , {options} ,callBack)

// fs.mkdir("pages" , (err) => {
//     if(err) throw err;
//     console.log("Create a new folder --> pages");
// })

// fs.mkdir("Css/Home/Style" , {recursive: true} ,(err) => {
//     if(err) throw err;
//     console.log('create a nested folder of CSS');
// })


// ==================readFile==================
// read file 
// fs.readFile(path , fnc(err,data) {})

// fs.readFile("hello.txt" , "utf-8" , (err , data) => {
//     if(err) throw err;
//     console.log("data : "+data)
// })
// as a response we get the data of the file in buffer form but if we give the encoding as "utf-8" then we get the data in string form

// ==================read folder==================
//fs.readDir(path ,  fnc(err,files) {})

// fs.readdir("Css/Home/Style" , (err , files) => {
//     if(err) throw err;
//     console.log(files)
// })
// as a response we get the array of files and folders in the given path

// ==================copy files==================
// fs.copyFile(path with file name , path with new file name , fnc(err) {})
// fs.copyFile("hello.txt" , "Css/About/Data/About.txt" , ((err) => {
//     if(err) throw err;
//     console.log('copy file succssfully at Css/About/Data')
// }))

// ==================Rename file==================
// fs.rename("old(existing) file name with path" , "new file name with path " , callBack fnc)

// fs.rename("hello.txt" , "name.txt" , ((err) => {
//     if(err) throw err;
//     console.log('rename successfully');
// }))

// fs.rename("Css/About/Data/renamed.txt" , "Css/About/Data/About.txt" , ((err) => {
//     if(err) throw err;
//     console.log('rename successfully');
// }))

// ==================Rename folder==================
// fs.rename("Css/About/Data" , "Css/About/Info" , (err) => {
//     if(err) throw err;
//     console.log("Folder Rename SuccessFully!!!");
// })

// ==================delete file==================
// delete file
// fs.rm("file name with path" , callBack);

// fs.rm("name.txt" , (err) => {
//     if(err) throw err;
//     console.log('Delete file SuccssFully!!!');
// })

// ==================Delete folder==================

// fs.rm("index.js" , {recursive : true , force: true} , (err) => {
//     if(err) throw err;
//     console.log('delete successfully!!!');
// } )

console.log(chalk.blue("Write with chalk"));