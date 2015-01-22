var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
console.log(buf.toString('utf8').split(/\r\n|\r|\n/).length -1);
