var dir = process.argv[2];
var ext = process.argv[3];
var filterDir = require('./filter-dir.js');

filterDir(dir, ext);

