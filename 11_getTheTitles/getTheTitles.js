const getTheTitles = function(books) {
  const keys = [];
  books.forEach((book) => {
    keys.push(book.title);
  })
  return keys;
};

// Do not edit below this line
module.exports = getTheTitles;
