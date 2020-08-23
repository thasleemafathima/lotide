
const tail = function(array) {
  array.splice(0,1);
  return array.length;
};

module.exports = tail;
