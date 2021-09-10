// Given a number print out every integer from 1 to that number.
// If it is divisible by 2 print out "Fizz", divisible by 3 print "Buzz"
// and if it is both print "Fizz Buzz".

const integerDivisibleCheck = i => {
  switch (true) {
    case ((i % 2 === 0 || -0) && (i % 3 === 0 || -0)):
      console.log(`${i} Fizz Buzz`);
      break;
    case (i % 2 === 0 || -0):
      console.log(`${i} Fizz`);
      break;
    case (i % 3 === 0 || -0):
      console.log(`${i} Buzz`);
      break;
    default: 
      console.log(i, "default");
      break;
  };
};

const integerIteration = integer => {
  if (integer > 0) {
    for (let i = 1; i <= integer; i++) {
      integerDivisibleCheck(i);
    };
  } else {
    for (let i = -1; i >= integer; i--) {
      integerDivisibleCheck(i);
    };
  };
};

integerIteration(10);
integerIteration(-10);