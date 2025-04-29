const add = function(val1, val2) {
  return val1 + val2;	
};

const subtract = function(val1, val2) {
  return val1 - val2;
};

const sum = function(arr) {
  return arr.reduce((accumulator, element) => {
    return accumulator + element;	
  }, 0 )};

const multiply = function(arr) {
  return arr.reduce((accumulator, element) => {
    return accumulator * element;
  }, 1);
};

const power = function(number, power) {
  let product = 1;
  for (let i = 0; i < power; i++) {
    product *= number;
  }
  return product;
};

const factorial = function(number) {
  let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
