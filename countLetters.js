// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const countLetters = function(str) {
  const count = {};
  for (let i of str) {
    //console.log(count[i])
    if (count[i] === undefined) {
      count[i] = 1;
    } else {
      count[i] += 1;
    }
  }
  return count;
};

const letter = countLetters("Thasleema");
console.log(assertEqual(letter["h"],2));