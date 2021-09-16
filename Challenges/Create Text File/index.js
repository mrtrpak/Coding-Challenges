const fs = require('fs');

let data = "You successfully created a text file.";

fs.writeFile('index.txt', data, err => {
  if (err) throw err;
});