// Given an array of numbers, calculate the
// mean, median and mode.

const fs = require('fs');

const numbers = [1, 5, 10, 25, 100, 133, 200, 3, 8, 5];

const mean = arrayOfNumbers => {
  const reducer = (previousValue, currentValue) => 
    previousValue + currentValue;
  const mean = arrayOfNumbers.reduce(reducer) /arrayOfNumbers.length;
  
  return `The mean is ${mean}`;
};

const median = arrayOfNumbers => {
  let median = 0, numLength = arrayOfNumbers.length;

  arrayOfNumbers.sort((a, b) => a - b);

  if (numLength % 2 === 0)
    median = (arrayOfNumbers[numLength / 2 - 1] + arrayOfNumbers[numLength / 2]) / 2;
  else median = arrayOfNumbers[(numLength - 1) / 2];

  return `The median is ${median}`;
};

const mode = arrayOfNumbers => {
  const table = {};

  arrayOfNumbers.forEach(value => (
    table[value] = table[value] + 1 || 1
  ));

  let modes = [], max = 0;

  for (const key in table) {
    const value = parseFloat(key);
    const count = table[key];
    
    if (count > max) {
      modes = [value];
      max = count;
    } else if (count === max) {
      modes.push(value);
    };
  };

  if (modes.length === Object.keys(table).length)
    modes = [];

  return `The mode/s are/is ${modes}`;
}

const createMeanMedianModeFile = arrayOfNumbers => {
  const data = mean(arrayOfNumbers) + "\r\n" 
    + median(arrayOfNumbers) + "\r\n" 
    + mode(arrayOfNumbers);

  fs.writeFileSync("mmm.txt", data, err => {
    if (err) throw err;
  });
};

createMeanMedianModeFile(numbers);