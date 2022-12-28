const add = function (...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
};

const subtract = function (...nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result -= nums[i];
  }
  return result;
};

const sum = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return parseInt(result);
};

const multiply = function (nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  return parseInt(result);
};

const power = function (...nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result **= nums[i];
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return parseInt(result);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
