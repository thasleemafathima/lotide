
const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};




const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  // logic to update results here
  for (let arr of sentence) {
    if (results[arr] === undefined) {
      results[arr] = [];
    }
    results[arr].push(counter);
    //console.log(results[arr])
    counter++;
  }
  return results;
};


console.log(letterPositions("hello iis").e,[1]);
assertArraysEqual(letterPositions("hello").e, [1]);
