// implement a function that returns a fibonacci number
// at a given index.

// fibonacci: sum of the previous 2 numbers

const fibonacci1 = number => {
  number < 3 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
};

fibonacci1(15);

const fibonacci2 = number => {
  const series = [1, 1];

  for (let i = 2; i < number; i++) {
    const a = series[i - 1];
    const b = series[i - 2];

    series.push(a + b);
  }

  return console.log(series[number - 1]);
};

fibonacci2(15);