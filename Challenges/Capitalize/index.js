// Given a phrase capitalize the first letter of every word.

const phrase = "welcome to this coding challenge";

const capitalize1 = phrase => {
  const words = [];

  for (let word of phrase.split(" "))
    words.push(word[0].toUpperCase() + word.slice(1));

  return console.log(words.join(" "));
};

capitalize1(phrase);


const capitalize2 = phrase => {
  let title = phrase[0].toUpperCase();

  for (let i = 1; i < phrase.length; i++)
    title += phrase[i - 1] === " " ?
    phrase[i].toUpperCase() :
    phrase[i];

  return console.log(title);
};

capitalize2(phrase);