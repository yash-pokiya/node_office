// if you want to create a node server using http module of node 

// http and https modules 
// 1.protocols ==> rules ==> how to send data , how to receive data , how to handle errors , how to manage connections , etc..!
// 2.http ==> Hypertext transfer protocol
// 3. https ==> Hypertext transfer protocol secure

// http module is used to create a server and handle the request and response of the client and server  they provide a way to communication between client and server over http protocol the http module is used for non secure communication and https module is used for secure communication to create a server using http module we need to require the http module and then use the createServer method of the http module to create a server and then listen to the server on a specific port

const http = require("http");

// create a route for homepage only 
// req ==>send by user 
//res ==> send by server
const server = http.createServer((req,res) => {
    res.end("Hello World!!!");
});

server.listen(3000 , () => {
    console.log(`go to browser and check localhost:3000`);
})