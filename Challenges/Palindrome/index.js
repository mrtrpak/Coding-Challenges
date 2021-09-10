// A palindrome is a word or phrase that reads the same backwards as forwards. 
// Write a function that checks for them.

const checkForPalindrome1 = string => {
  const reversedStringToCheck = string.replace(/[!?,:;'"]/g, "").toLowerCase().split("").reverse().join("").split(" ").join("");

  const initialStringToCheck = string.replace(/[!?,:;'"]/g, "").toLowerCase().split(" ").join("");

  if (reversedStringToCheck === initialStringToCheck) {
    return console.log(`${string} is a palindrome! AWESOME :)`);
  } else {
    return console.log(`${string} is NOT a palindrome, bummer`);
  };

};

checkForPalindrome1("i am A Test SenTence");
checkForPalindrome1("Holloh");
checkForPalindrome1("was it a car or a cat I saw?");


const checkForPalindrome2 = string => {
  const reversedStringToCheck = string.replace(/[!?,:;'"]/g, "").toLowerCase().split("").reverse().join("").split(" ").join("");

  const initialStringToCheck = string.replace(/[!?,:;'"]/g, "").toLowerCase().split(" ").join("");

  reversedStringToCheck === initialStringToCheck ? 
    console.log(`${string} is a palindrome! AWESOME :)`) :
    console.log(`${string} is NOT a palindrome, bummer`)
};

checkForPalindrome2("was it a car or a cat I saw?");
checkForPalindrome2("neEettTeeen");