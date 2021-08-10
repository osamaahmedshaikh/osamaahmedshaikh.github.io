var express = require('express');
var fs = require('fs');
var url = require('url');
var bodyParser=require('body-parser'); 
var nodemailer = require('nodemailer');
var multer=require('multer'); 
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var router = express.Router();
var port = 8080;
const { body, validationResult } = require('express-validator');
// app.use(express.json());
var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
// app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));
var upload = multer({ dest: 'uploads/' });
app.post('/Bio/', upload.single('image'), function (req, res) {
    console.log(req.file);
    var images = '/images/' + req.file.originalname;
    fs.rename(req.file.path, __dirname + images, function (err) {
        if (err) throw err;
    });
    req.body.images = images;
    console.log(req.body);
    title = req.body.title;
    console.log(req.body);
    small = req.body.small;
    console.log(req.body);
    fullname = req.body.fullname;
    console.log(req.body);
    address = req.body.address;
    console.log(req.body);
    phone = req.body.phone;
    console.log(req.body);
    Email = req.body.Email;
    console.log(req.body);
    data = "title: " + title +"\n" + "smalltitle: " + small +"\n" + "fullnames: " + fullname +"\n" + 
    "homeaddress " + address + "phonenumber " + phone + "emailadddress" + Email; 
    var data = JSON.stringify(req.body);
    MongoClient.connect(url,function(err, db) {
        if(err)throwerr;
        dbo = db.db('infor');
        var myobj = { title:title, smalltitle:small, fullnames:fullname, homeaddress:address, phonenumber:phone, emailadddress:Email};
        req.body.timeupdated = Date.now();
        dbo.collection("infor").insertOne(req.body,function(err, res) {
            if(err)throwerr;
            console.log("1 document inserted");
            db.close();
        });
    });
    res.send("Saved")
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin, X - Requested - With, Content - Type, Accept, content - type, application / json');
    next();
});
app.post("/login/",function(req,res){  
    user = req.body.username;
    pass = req.body.password;
    if (user == "osamashaikh" && pass == "123456789"){
        req.session.user = user;
        req.session.pass = pass;
            res.redirect('/bio-admin.html');
    }
    else {
        res.status("400");
      res.send('<center><h1 style = "color: red; font-weight: bold">Wrong details please enter correct username and password! please return to this link and try again www.google.com.</h1></center>');
    }
});
app.get("/Biodata/",function(req,res){
    MongoClient.connect(url,function(err, db) {
        if(err)throwerr;dbo = db.db('infor');
        dbo.collection("infor").find({},{timeupdated:1,_id:0}).sort({timeupdated:-1}).limit(1).toArray(function(err, result) {
            if(err)throwerr;
            console.log(result);
            db.close();
            var datats = result;
            res.json(datats);
        });  
    });
});
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raftwild2@gmail.com',
      pass: 'Os@ma1995'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'raftwild2@gmail.com',
    subject: 'Hello',
    html: '<h1>Welcome</h1><p>good job</p>'
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
app.get("",function(req,res){
    res.sendFile('index.html',{
        root:__dirname
    })
});
app.listen(port,function() {  
    console.log("Server listening on: " + port);
});