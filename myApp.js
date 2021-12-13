require('dotenv').config();

var express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');


var app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', function (req, res) {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({ "message": "HELLO JSON" });
    } else {
        res.json({ "message": "Hello json" });
    }
})

app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next()
}, function (req, res) {
    res.json({
        "time": req.time
    });
})

app.get('/:word/echo', function(req, res){
    res.json({
        "echo": req.params.word
    });
})


app.get('/name', function(req, res){
    res.json({
        "name": req.query.first + " " + req.query.last
    });
})

app.post('/name', function(req, res){
    res.json({
        "name": req.body.first + " " + req.body.last
    });
})























module.exports = app;
