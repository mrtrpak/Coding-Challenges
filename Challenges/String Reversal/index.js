// Given a string of characters as input, 
// write a function that returns the characters reversed

const reverseString = string => {
  console.time("execution time");

  (string.split("").reverse().join(""));

  console.timeEnd("execution time");
};

console.log(reverseString("hello"));