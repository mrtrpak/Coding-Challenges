// Given an array and a size, split the array items
// into a list of arrays of the given size.

const array = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

const arrayChunking1 = (array, size) => {
  const chunks = [];

  for (let item of array) {
    const lastChunk = chunks[chunks.length - 1];

    if (!lastChunk || lastChunk.length === size)
      chunks.push([item]);
    else lastChunk.push(item);
  };

  return console.log(chunks);
};

arrayChunking1(array, 3);


const arrayChunking2 = (array, size) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  };

  return console.log(chunks);
};

arrayChunking2(array, 5);


const arrayChunking3 = (array, size) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  };

  return console.log(chunks);
};

arrayChunking3(array, 2);