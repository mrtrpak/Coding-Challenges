// Given a string of words or phrases count the number of vowels.

const vowels1 = string => {
  let count = 0;
  const vowelList = ["a", "e", "i", "o", "u"];

  for (let character of string.toLowerCase())
    if (vowelList.includes(character))
    count++;

  return console.log(`There are ${count} vowels in '${string}'`);
};

vowels1("Welcome to the game!");


const vowels2 = string => {
  let count = string.toLowerCase().match(/[aeiou]/gi).length;

  return console.log(`There are ${count} vowels in ${string}`);
};

vowels2("Hello wElcome home");