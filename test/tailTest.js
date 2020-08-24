const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 2 for [Hello,Lighthouse,Labs]", () => {
    assert.strictEqual(tail(["Hello","Lighthouse","Labs"]), 2);
  });

});
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, 2);