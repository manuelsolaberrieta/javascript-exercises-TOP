const palindromes = function (str) {
  let rts = "";
  str = str.replace(/[?.!, ]/g, "").toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    rts = rts + str[i];
  }
  if (rts == str) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
