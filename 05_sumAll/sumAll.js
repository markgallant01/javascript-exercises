const sumAll = function(val1, val2) {
  if (typeof val1 !== "number" || typeof val2 !== "number") {
    return "ERROR";
  }

  if (val1 % 1 !== 0 || val2 % 1 !== 0) {
    return "ERROR";
  }

  if (val1 < 0 || val2 < 0) {
    return "ERROR";
  }

  let sum = 0;
  let start = val1;
  let end = val2;

  if (val2 < val1) {
    start = val2;
    end = val1;
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
