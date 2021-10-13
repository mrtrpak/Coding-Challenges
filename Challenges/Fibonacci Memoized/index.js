// Implement a performant recursive function for fibonacci

const fibonacci1 = (element, cache = []) => {
  if (cache[element])
    return console.log(cache[element]);
  else {
    if (element < 3)
      return console.log(1);
    else 
      cache[element] = fibonacci1(element - 1, cache)
      + fibonacci1(element - 2, cache);
  }

  return console.log(cache[element]);
};