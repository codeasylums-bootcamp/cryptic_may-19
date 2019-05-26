var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/(something)';
MongoClient.connect(url, function(err, db){
    if(err) {
        return console.dir(err);
    }
    console.log("Connected Successfully");
});

const InsertDocument = function(db, callback) {
    const collection = db.collection('úsers');
    collection.insert()
}

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