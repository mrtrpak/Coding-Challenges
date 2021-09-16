// For a given number, find all the prime numbers from zero to that number.

const allPrimes = number => {
  const numbers = new Array(number + 1);

  numbers.fill(true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++)
      numbers[i * j] = false;
  }

  return console.log(numbers.reduce((primes, isPrime, prime) => 
    (isPrime ? primes.concat(prime) : primes),
    []  
  ));
};

allPrimes(100);