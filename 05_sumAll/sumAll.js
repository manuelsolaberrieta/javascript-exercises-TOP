const sumAll = function (start, finish) {
  let sum = 0;
  if (start < 0 || finish < 0) {
    return "ERROR";
  }
  if (typeof start !== "number" || typeof finish !== "number") {
    return "ERROR";
  }
  if (finish < start) {
    let aux = start;
    start = finish;
    finish = aux;
  }
  for (let i = start; i <= finish; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
