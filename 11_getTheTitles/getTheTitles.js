const getTheTitles = function (obj) {
  let titles = [];
  obj.forEach((e) => {
    titles.push(e.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
