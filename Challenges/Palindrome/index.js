// A palindrome is a word or phrase that reads the same backwards as forwards. 
// Write a function that checks for them.

const checkForPalindrome = string => {
  const reversedStringToCheck = string.replace(/[!?,:;'"]/g, "").toLowerCase().split("").reverse().join("").split(" ").join("");

  const initialStringToCheck = string.replace(/[!?,:;'"]/g, "").toLowerCase().split(" ").join("");

  if (reversedStringToCheck === initialStringToCheck) {
    return console.log(`${string} is a palindrome! AWESOME :)`);
  } else {
    return console.log(`${string} is NOT a palindrome, bummer`);
  }
};

checkForPalindrome("i am A Test SenTence");
checkForPalindrome("Holloh");
checkForPalindrome("Was it a car or a cat I saw");
checkForPalindrome("was it a car or a cat I saw?");