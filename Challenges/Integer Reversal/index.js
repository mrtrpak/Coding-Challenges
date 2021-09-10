// Given a Number(integer), reverse the order of the digits

const reverseInteger = integer => {
  const reversedIntegerString = integer.toString().split("").reverse().join("");

  console.log(parseInt(reversedIntegerString));

};

reverseInteger(1234567);
reverseInteger(2100);