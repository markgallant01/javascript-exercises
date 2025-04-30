const palindromes = function (word) {
  const badChars = ".,/?! ";
  
  word = word.toLowerCase();
  let letters = word.split("");
  letters = letters.filter((letter) => !(badChars.includes(letter)));
  let originalWord = letters.join("");

  letters.reverse();
  let reversedWord = letters.join("");
  return originalWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
