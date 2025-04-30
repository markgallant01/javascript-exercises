const findTheOldest = function(arr) {
  let oldestPerson = null;
  
  // grab the first object with a non-undefined yearOfDeath value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].yearOfDeath !== undefined) {
      oldestPerson = arr[i];
      break;
    }   
  }

  let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

  arr.forEach((person) => {
    if (person.yearOfDeath === undefined) { return; }
    let personAge = person.yearOfDeath - person.yearOfBirth;
    if (personAge > oldestAge) {
      oldestPerson = person;
      oldestAge = personAge;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
