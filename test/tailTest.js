const tail = require('../tail');
const assertEqual = require('../assertEqual');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, 2);