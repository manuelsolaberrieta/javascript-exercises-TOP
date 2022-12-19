const convertToCelsius = function (far) {
  let result = (far - 32) / 1.8;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (cel) {
  let result = cel * 1.8 + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
