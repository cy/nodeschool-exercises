var q = require('q');
var defer = q.defer();

defer.promise.fail(function(error) {
  //offical anser uses defer.promise.then(null, functionObj)
  console.log(error.message);
});

setTimeout(function() {
  defer.reject(new Error("REJECTED!"));
}, 300);


