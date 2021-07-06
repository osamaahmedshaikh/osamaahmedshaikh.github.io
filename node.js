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
app.post("/login/",function(req,res){  
    user = req.body.uname;
    pass = req.body.psw;
    if (user == "osamashaikh" && pass == "123456789"){
        req.session.user = user;
            res.redirect('/bio-admin.html');
    }
    else {
        res.status("400");
      res.send("Wrong details please enter correct username and password!");
    }
});  
server.listen(port,err,function() {  
    if (err) {
        return console.log(err);
    }
    console.log("Server listening on: " + port);
});