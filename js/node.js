var http = require('http');
var fs = require('fs');
// var http = require('myDateTime');

http.createServer(function (req, res) {
  fs.readFile('index.html',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
}).listen(8080);

// exports.myDateTime = function () {
//   return Date();
// };