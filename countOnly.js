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



const countOnly = function(allItems, itemsToCount) {
  const results = {}

  /*for (const item of allItems) {
    console.log(item);
    
  }
  for (const obj in itemsToCount){
    //console.log(itemsToCount[obj],"thaa");
    results[obj] = 1;
    console.log(results[obj]);
  }*/

  for (const item of allItems){
   for (const obj in itemsToCount){
    if(item === obj){
      if(results[obj] === undefined){
      results[obj] = 1;
      }else{
        results[obj] += 1;
      }
    }
  }
  }

  console.log(results);
  return results;
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

