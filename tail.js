// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let pass = 0;
  for (let i in actual) {
    if (actual[i] === expected[i]) {
      pass = 1;
    } else {
      pass = 0;
    }
  }
  if (pass === 1) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const tail = function(array) {
  array.splice(0,1);
  return array;
};



const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]);