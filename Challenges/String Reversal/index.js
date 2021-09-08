// Given a string of characters as input, 
// write a function that returns the characters reversed

const reverseString1 = string => {
  console.time("variant 1");

  (console.log(string.split("").reverse().join("")));

  console.timeEnd("variant 1");
};

reverseString1("hello");


const reverseString2 = string => {
  console.time("variant 2");
  let reversedString = [];
  
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  };

  (console.log(reversedString.join('')));
  console.timeEnd("variant 2");
};

reverseString2("flabbergasted");