function reduce(arr, fn, initial) {
  if(arr.length == 0) {
    return inital;
  } else {
    inital += fn(prev, arr[0], 0, arr);
    return reduce(arr.slice(1), fn, inital);
  }
}
module.exports = reduce
