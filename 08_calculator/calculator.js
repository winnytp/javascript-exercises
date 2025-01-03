const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); 

  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);

  return total;
};

const power = function(number, power) {
  let currentTotal = number;
  for (i = 1; i < power; i++) {
    currentTotal = currentTotal * number;
  }
  return currentTotal;
};

const factorial = function(number) {
  if (number === 0) return 1;

  let currentMultiplier = number;
  let result = number;

  for (let i = 1; i < number; i++) {
    result = result * (currentMultiplier - 1);
    currentMultiplier--;
  }

  return result;
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
