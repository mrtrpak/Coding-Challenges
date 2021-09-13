// Anagrams are words or phrases that contain the same number of characters. Create a function to check for this.

const anagrams1 = (string1, string2) => {
  const setString1 = string1.replace(/[^\w]/g, "").toLowerCase();
  const setString2 = string2.replace(/[^\w]/g, "").toLowerCase();

  // get the character map of both strings
  const charMap1 = getCharMap(setString1);
  const charMap2 = getCharMap(setString2);

  /* Next, we loop through each character in the charMapA, 
  and check if it exists in charMapB and has the same value as
  in charMapA. If it does not, return false */

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return console.log(`${string1} is not an anagram of ${string2}`);
    };
  };

  return console.log(`${string1} is an anagram of ${string2}`);
};

const getCharMap = string => {
  let charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  };

  return charMap;
};

anagrams1("listen", "silEnt!");
anagrams1("dormitory", "dirty Room");


const anagrams2 = (string1, string2) => {
  const setString1 = string1.replace(/[^\w]/g, '').toLowerCase();
  const setString2 = string2.replace(/[^\w]/g, '').toLowerCase();

  sortString(setString1) === sortString(setString2) ?
    console.log(`'${string1}' IS an anagram of '${string2}'.`) :
    console.log(`'${string1}' is NOT an anagram of '${string2}'.`);
};

// function to sort the strings
sortString = string => {
  return string.split("").sort().join("")
}

anagrams2("listen", "siLent?");