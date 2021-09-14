// Given a phrase, reverse the order of the characters of each word.

const reverseWords1 = string => {
  const wordsReversed = [];

  string.split(" ").forEach(word => {
    let wordReversed = "";

    for (let i = word.length - 1; i >= 0; i--)
      wordReversed += word[i];
      wordsReversed.push(wordReversed);
  });

  return console.log(wordsReversed.join(" "));
};

reverseWords1(" Welcome to this coding challenge!");


const reverseWords2 = string => {
  console.log(string.split(" ").map(word => 
    word.split("").reverse().join("")
  ))
  .join(" ");
};

reverseWords2("What is it that I can do for you?");