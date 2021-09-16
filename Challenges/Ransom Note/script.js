// Given a magazine of words and a ransom note,
// determine if it's possible to "cut out" and 
// create the ransom note from the magazine words.

const note = "This is a Ransom Note pay 1 MillION !";
const note2 = "This is a ransom note and we demand 15 million!!!";
const magazine = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Pay million Lorem Ipsum has been the industry's standard dummy text ever ransom note since the 1500s, when an unknown printer took a galley of type This is a Ransom Note pay 1 Million ! and scrambled it to make a type specimen book. this It has survived not only five centuries, is a but also the leap into electronic typesetting , remaining essentially ! unchanged."

const ransomNote = (note, magazine) => {
  const magazineWords = magazine.split(" ");
  const magazineHash = {};

  magazineWords.forEach(word => {
    if (!magazineHash[word])
      magazineHash[word] = 0;
      magazineHash[word]++;
  });

  const noteWords = note.split(" ");
  let possible = true;

  noteWords.forEach(word => {
    if (magazineHash[word]) {
      magazineHash[word]--;
      if (magazineHash[word] < 0)
        possible = false;
    } else possible = false;
  });

  return console.log(possible);
};

ransomNote(note.toLowerCase(), magazine.toLowerCase());
ransomNote(note2.toLowerCase(), magazine.toLowerCase());