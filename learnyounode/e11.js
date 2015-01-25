var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  var readStream = fs.createReadStream(process.argv[3]);
  readStream.on('open', function() {
    readStream.pipe(res);
  }).on('error', function(err) {
    res.end(err);
  });
  //according to the answer, this also works, don't need to listen to the open event
  //fs.createReadStream(process.argv[3]).pipe(res)
});
server.listen(process.argv[2]);

