// Given a string of characters as input, 
// write a function that returns the characters reversed

const checkTime = (func, id) => {
  console.time(`variant ${id}`);
  func;
  console.timeEnd(`variant ${id}`);
};

const reverseString1 = string => (
  console.log(string.split("").reverse().join(""))
);

checkTime(reverseString1("flabbergasted"), 1);


const reverseString2 = string => {
  let reversedString = [];
  
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  };

  return console.log(reversedString.join(""));
};

checkTime(reverseString2("flabbergasted"), 2);