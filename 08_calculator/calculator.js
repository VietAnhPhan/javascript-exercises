const add = function (addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function (subtrahend1, subtrahend2) {
  return subtrahend1 - subtrahend2;
};

const sum = function (arrayOfAddends) {
  let sum = 0;
  arrayOfAddends.forEach(addend => {
    sum += addend;
  });
  return sum;
};

const multiply = function (arrayOffactors) {
  let product = 1;
  arrayOffactors.forEach(factor => {
    product *= factor;
  })
  return product;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
