var express = require('express');
var app = express();

app.use(express.static('public'));

console.log('Hello World');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})
































module.exports = app;
