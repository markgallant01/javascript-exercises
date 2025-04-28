const reverseString = function(string) {
  const letters = string.split(""); 
  letters.reverse();
  return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;
