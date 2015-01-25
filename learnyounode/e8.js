var http = require('http');

http.get(process.argv[2], function(res) {
  var gotData = "";
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    gotData += chunk;
  });
  res.on('end', function() {
    console.log(gotData.length);
    console.log(gotData);
  });

}).on('error', function(e) {
  console.log("error " + e.message);
});
