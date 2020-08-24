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
module.exports = eqArrays;
