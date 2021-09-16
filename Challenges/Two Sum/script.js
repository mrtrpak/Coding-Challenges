// Given an array of numbers, return all pairs that add
// up to a given sum. The numbers can be used multiple times.
const numbers = [1, 3, 10, , 2, 3, 1, 5, 6, 11, 3, 1, 7, 4, 11, 55, 150, 37, 44, 81, 33, 69, 115];

const twoSum = (array, sum) => {
  const pairs = [];
  const store = [];

  for (let part1 of array) {
    const part2 = sum - part1;

    if (store.indexOf(part2) !== -1)
      pairs.push([part1, part2]);
      store.push(part1);
  };

  return console.log(pairs);
};

twoSum(numbers, 10);