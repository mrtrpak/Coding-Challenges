// Given a phrase, substitute each character by shifting
// it up or down the alphabet by a given integer. If 
// necessary, the shifting should wrap around back to
// the beginning or the end of the alphabet.

const phrase = "Hello, weLComE to tHis Challenge and The SolutionS!"

const caesarCipher1 = (phrase, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = phrase.toLowerCase();

  let output = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    };

    let index = alphabet.indexOf(letter) + number % 26;

    if (index > 25) index -= 26;
    if (index < 0) index += 26;
    
    output += phrase[i] === phrase[i].toUpperCase() 
    ? alphabet[index].toUpperCase() 
    : alphabet[index];
  };

  return console.log(output);
};

caesarCipher1(phrase, 5);


const caesarCipher2 = (phrase, number) => {
  let result = Array(phrase.length);

  for (let i = 0; i < phrase.length; i++) {
    let code = phrase.charCodeAt(i);
    let lower = "a".charCodeAt(0);

    if (code >= lower && code < lower + 26)
      code = (code - lower + number) % 26 + lower;
      
    let upper = "A".charCodeAt(0);

    if (code >= upper && code < upper + 26)
      code = (code - upper + number) % 26 + upper;
      
    result[i] = String.fromCharCode(code);
  };

  return console.log(result.join(""));
};

caesarCipher2(phrase, 3);