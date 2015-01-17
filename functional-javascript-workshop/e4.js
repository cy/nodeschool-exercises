function getShortMessages(messages) {
  return messages.filter(function(value, index) {
    return value.message.length < 3;
  }).map(function(value) {
    return value.message;
  });
}

//console.log(getShortMessages(["hi", "bye", "ajldfaiowejwoaejmflakdflksadjfalsdfjlajdiojrwejr"]));
module.exports = getShortMessages

