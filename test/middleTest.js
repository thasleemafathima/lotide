const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [7] for 1,2,7,4,5]", () => {
    assert.deepEqual(middle([1,2,7,4,5]), [7]);
  });

});

//assertArraysEqual(middle([1,2,7,4,5]),[7]);