var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
  if (err) {
    console.log("An error occured");
  } else {
    console.log(data.toString('utf8').split('\n').length - 1);
  }
});
