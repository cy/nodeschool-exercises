var fs = require('fs');
var ext = process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
  if (err) {
    console.log("Error");
  } else {
    list.forEach(function(value) {
      if(new RegExp('\.' + ext + '$').test(value)) {
        console.log(value);
      }
    });
  }
});
