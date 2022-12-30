const findTheOldest = function (arr) {
  let oldest = arr[0];
  function getAge(obj) {
    if (obj.hasOwnProperty("yearOfDeath")) {
      return obj.yearOfDeath - obj.yearOfBirth;
    } else {
      let currentYear = new Date().getFullYear();
      return currentYear - obj.yearOfBirth;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (getAge(arr[i]) > getAge(oldest)) {
      oldest = arr[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
