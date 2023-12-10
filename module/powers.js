const square = (number) => {
  return number * number;
};

const cube = (number) => {
  return number * number * number;
};
// module.exports = square;
module.exports = { square, cube };

// Second Way
// exports.square = (number) => {
//   return number * number;
// };

// exports.cube = (number) => {
//   return number * number * number;
// };
