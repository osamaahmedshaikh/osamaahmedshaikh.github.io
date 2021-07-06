var http = require('http');  
var url = require('url');  
var fs = require('fs');
var express = require('express');
const app = express();
var port = 8082;  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {   
        case '/index.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(port,err,function() {  
    if (err) {
        return console.log(err);
    }
    console.log("Server listening on: " + port);
});