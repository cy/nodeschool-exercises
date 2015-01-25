var http = require('http');

var returned = [
  {
    'ended': false,
    'data': ""
  },
  {
    'ended': false,
    'data': ""
  },
  {
    'ended': false,
    'data': ""
  }
];

var print_all = function() {
  for(var i = 0; i < 3; i++) {
    console.log(returned[i].data);
  }
}

var is_ended = function(item) {
  return item.ended;
}

var callHttpGet = function(index) {
  http.get(process.argv[index+2], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      returned[index].data += chunk;
    });
    res.on('end', function() {
      returned[index].ended = true;
      if(returned.every(is_ended)) {
        print_all();
      }
    });
  }).on('error', function(e) {
    console.log("error " + e.message);
  });
}

for(var i = 0; i < 3; i++) {
  callHttpGet(i);
}

// why didn't this work...
/*for(var i = 0; i < 3; i++) {*/
  //http.get(process.argv[i+2], function(res) {
    //res.setEncoding('utf8');
    //res.on('data', function(chunk) {
      //console.log(returned);
      //console.log(i);
      //returned[i].data += chunk;
    //});
    //res.on('end', function() {
      //returned[i].ended = true;
      //if(returned.every(is_ended)) {
        //print_all();
      //}
    //});
  //}).on('error', function(e) {
    //console.log("error " + e.message);
  //});
/*}*/

