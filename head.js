
const assertEqual = require('./assertEqual');


const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};
