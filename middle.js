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

module.exports = middle;
