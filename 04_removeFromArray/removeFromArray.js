const removeFromArray = function (arr, ...args) {
  for (let item of args) {
    if (arr.indexOf(item) < 0) {
      continue;
    } else {
      arr.splice(arr.indexOf(item), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
