// For a given number of steps print out a staircase
// using hashes and spaces

const staircase1 = number => {
  let stairs = "";

  for (let row = 0; row < number; row ++) {
    let stair = "";

    for (let column = 0; column < number; column++)
      stair += column <= row ? "#" : "";

    stairs += stair + "\n";
  };

  return console.log(stairs);
};

staircase1(25);

const staircase2 = (number, row = 0, stair = "", stairs = "") => {
  if (row === number) return console.log(stairs);
  if (stair.length === number) 
    return staircase2(number, row + 1, "", stairs + stair + "\n");

  return staircase2(number, row, stair + (stair.length <= row ? "#" : " "), stairs);
};