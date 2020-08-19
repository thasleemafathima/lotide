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


const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//console.log(assertArraysEqual([1,2,3],[1,2,3]));

const middle = function(array){
  let middle = [];
  if(array.length < 3){
    return middle;
  }else if(array.length%2 === 0) {
    middle.push(array[Math.floor((array.length - 1)/2)]);
    middle.push(array[Math.floor((array.length)/2)]);
  }else if(array%2 !== 0){
    middle.push(array[Math.floor((array.length)/2)]);
  }
return middle;
}

console.log(assertArraysEqual(middle([1,2,2,4,5]),[2,2]));