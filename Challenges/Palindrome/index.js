// A palindrome is a word or phrase that reads the same backwards as forwards. 
// Write a function that checks for them.

const checkForPalindrome = string => {
  const reversedString = string.toLowerCase().split("").reverse().join("");

  console.log(reversedString);
};

checkForPalindrome("i am A Test SenTence");