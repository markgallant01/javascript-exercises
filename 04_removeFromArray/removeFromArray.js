const removeFromArray = function(arr, value) {
  let result = arr;
  for (let i = 1; i < arguments.length; i++) {
    result = result.filter(element => element !== arguments[i]);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
