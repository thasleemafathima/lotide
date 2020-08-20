

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



const eqObjects = function(object1, object2) {
  let counter1 = 0;
  let counter2 = 0;
  for (let obj1 in object1) {
    if (obj1) {
      counter1++;
    }
  }
  for (let obj2 in object2) {
    if (obj2) {
      counter2++;
    }
  }
  if (counter1 === counter2) {
    //return true;
  } else {
    return false;
  }



  let result = false;
  for (let o1 in object1) {
    for (let o2 in object2) {
      if (o1 === o2) {
        if (object1[o1] === object2[o2]) {
          result = true;
        } else {
          return false;
        }
      }
    }
  }
  return result;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqArrays(eqObjects(cd, dc),true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqArrays(eqObjects(cd, cd2),false)); // => false
