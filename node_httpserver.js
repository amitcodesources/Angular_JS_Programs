var http=require('http');

var fs=require('fs');

http.createServer(function (req, res) {
    var help=fs.readFileSync('help.txt');
    res.end(help.toString());
}).listen(8080);

console.log('Server Started on http://127.0.0.1:8080');