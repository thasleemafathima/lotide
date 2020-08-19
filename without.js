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






const without = function(source,itemsToRemove) {
  let newArray = [];
  if (eqArrays(source,itemsToRemove) === true) {
    return newArray;
  } else {
    for (let i in source) {
      if (source[i] !== itemsToRemove[i]) {
        newArray.push(source[i]);
      }
    }
  } return newArray;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
