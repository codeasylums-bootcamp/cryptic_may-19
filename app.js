var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var port = 3000;
var app = express();

app.use(function(req,res,next){
    console.log("Time: ", Date.now());
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(port);
console.log("Server started at port "+port);

module.exports = app;