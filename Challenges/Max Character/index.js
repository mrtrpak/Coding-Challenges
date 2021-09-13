// Given a string of characters, return the character
// that appears the most often.

const maxCharacter1 = string => {
  let count = 0,
    maxChar = "";

  string
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (string.split(char).length > count) {
        count = string.split(char).length -1;
        maxChar = char;
      };
    });
  return console.log(`${maxChar} appears ${count} times in '${string}'`);
};

maxCharacter1("hello world");
maxCharacter1("coding is great");


const maxCharacter2 = string => {
  const setString = string.toLowerCase().split("").join("").split(" ").join("");
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of setString) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    };
  };

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    };
  };

  return console.log(`${maxChar} appears ${max} times in '${string}'`);
};

maxCharacter2("hello world");