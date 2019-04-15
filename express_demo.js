var express=require('express');

var fs=require('fs');

var app =express();

app.get('/', function (req, res) {
    res.send('Main Page Accessed');
});

app.get('/help', function (req, res) {
    var help=fs.readFileSync('help.txt');
    res.send(help.toString());
});

app.get('/a*t', function (req, res) {
    res.send('Request For Page with name start with A & end with T');
});

app.listen(8080);

console.log('Server Started on http://127.0.0.1:8050');