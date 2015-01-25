var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  if(req.method !== 'GET') {
    req.end("GETs only, bye");
    return;
  }
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);
  var json = "";
  if(parsedUrl.pathname === '/api/parsetime') {
    json = JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    });
  } else if(parsedUrl.pathname === '/api/unixtime') {
    json = JSON.stringify({
      "unix": date.getTime()
    });
  } else {
    res.writeHead(500);
    res.end("Invalid endpoint");
    return;
  }
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(json);

}).listen(Number(process.argv[2]));

// official answer
/**
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
**/

