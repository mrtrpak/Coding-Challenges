// Given an array of items, reverse the order.

const array = [1, 2, 3, 4, 5];

const reverseArray1 = array => {

  console.log(array.reverse());
};

reverseArray1(array);

const reverseArray2 = array => {

  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = 
    [array[array.length - 1 - i], array[i]];
  };

  return console.log(array);
};

reverseArray2(array);
reverseArray2(array);