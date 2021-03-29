var router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and javascript point from a web browser
//Solution: Use Node.js to perform the profile look ups and sever our template via HTTP

// Create a web server

var http = require('http');
http.createServer(function(req, res) {
    router.home(req, res);
    router.user(req, res);
    //response.end('hello world)
}).listen(3000);
console.log('Server is running on port 3000');