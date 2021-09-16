const fs = require('fs');

let data = "You successfully created a text file.";

// write file will create a new file with the specified data in it. If file
// already exists it will replace the file.
fs.writeFile("index.txt", data + "/r/n", err => {
  if (err) throw err;
});

// append file will add content to specified file. If no file exists it will create it.
fs.appendFile("index.txt", " I added to file!", err => {
  if (err) throw err;
});