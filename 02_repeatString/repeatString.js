const repeatString = function (word, repeats) {
  let words = "";
  if (repeats < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repeats; i++) {
    words += word;
  }
  return words;
};

// Do not edit below this line
module.exports = repeatString;
