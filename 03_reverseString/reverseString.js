const reverseString = function (str) {
  let rts = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rts = rts + str[i];
  }
  return rts;
};
// Do not edit below this line
module.exports = reverseString;
