/*
* Home assignment #1
* HTTP Server should respond with "Hello world!" for /hello request
* Author: Adrian Iurca
* Date: 20/12/2018
*/

var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {
	// Get the trimmed path
	var path = url.parse(req.url,true).pathname.replace(/^\/+|\/+$/g,'');

	// Ignore all payloads and send response "Hello world!" when request /hello is received
	res.setHeader('Content-Type','application/json');
	switch(path) {
		case "hello":
			res.writeHead(200);
			res.end(JSON.stringify({'response' : 'Hello world!'}));
			console.log("Return this response:",200,{'response' : 'Hello world!'});
		break;
		default:
			res.writeHead(404);
			res.end(JSON.stringify({}));
			console.log("Return this response:",404,{});
		break;
	}
});

server.listen(3000,function(){
	console.log("The server is listening on port 3000");
});