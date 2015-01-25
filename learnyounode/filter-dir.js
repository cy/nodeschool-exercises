var fs = require('fs');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
  if (err) {
    return callback(err);
  } else {
    var filtered_list = [];
    list.forEach(function(value) {
      if(new RegExp('\.' + ext + '$').test(value)) {
        console.log(value);
        filtered_list.push(value);
      }
    });
    callback(null, filtered_list);
  }
});
}
