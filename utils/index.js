// UTILITY FUNCTIONS

const utils = {};

//Takes a name and returns their initials capitalized
utils.getInitials = (string) => {
  let strArr = string.split(' ');
  return strArr
    .map((word) => {
      let initials = '';
      initials += word[0];
      return initials;
    })
    .join('')
    .toUpperCase();
};

utils.makeObjectFromArray = (input) => {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      obj[input[i]] = input[i + 1];
    }
  }

  return obj;
};

utils.generateGroups = (array, size) => {
  let groupArray = [];
  let soloArray = [];
  for (let i = 0; i < array.length; i++) {
    if (soloArray.length <= size) {
      soloArray.push(array[i]);
    }
    if (soloArray.length >= size) {
      groupArray.push(soloArray);
      soloArray = [];
    }
  }
  if (soloArray.length) {
    groupArray.push(soloArray);
  }
  return groupArray;
};

module.exports = utils;
