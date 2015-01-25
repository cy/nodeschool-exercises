var net = require('net');

var server = net.createServer(function(socket){
  var date = new Date();
  var month = date.getMonth() + 1;
  if(month < 10)
    month = "0" + month;
  var dateString = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
  socket.end(dateString);
});

server.listen(process.argv[2]);

