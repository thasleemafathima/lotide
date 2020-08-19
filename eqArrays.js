// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/


const eqArrays = function (array1,array2) {
  if(array1.length !== array2.length){
    return false;
  }
  for(let i in array1){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);