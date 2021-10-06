// implement a function that returns a fibonacci number
// at a given index.

// fibonacci: sum of the previous 2 numbers

const fibonacci1 = number => {
  number < 3 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
};

fibonacci1(15);
