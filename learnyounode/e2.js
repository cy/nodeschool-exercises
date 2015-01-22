console.log(process.argv.slice(2).reduce(function(previousValue, currentValue) {
  return previousValue + Number(currentValue);
}, 0));

