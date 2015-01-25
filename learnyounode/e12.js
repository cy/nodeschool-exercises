var http = require('http');

http.createServer(function(req, res) {
  if(req.method === 'POST') {
    var postBody = "";
    req.on('data', function(chunk) {
      postBody += chunk.toString('utf8').toUpperCase();
    });
    req.on('end', function(){
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end(postBody);
    });
  } else {
    res.writeHead(500);
    res.end("This is a POST only server, yo.");
  }
}).listen(Number(process.argv[2]));

// official answer
/**
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {

  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)

})

server.listen(Number(process.argv[2]))
**/

