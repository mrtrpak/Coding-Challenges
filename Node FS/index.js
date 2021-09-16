const fs = require('fs');

let data = "You successfully created a text file.";

// write file will create a new file with the specified data in it. If file
// already exists it will replace the file.
fs.writeFile("index.txt", data, err => {
  if (err) throw err;
});

// append file will add content to specified file. If no file exists it will create it.
fs.appendFile("index.txt", " I added to file!", err => {
  if (err) throw err;
});

// open method takes a "flag" as a 2nd argument. If it is "w"(writing) the 
// file is opened for writing. If not exist an empty file is created.
fs.open("index2.txt", "w", (err, file) => {
  if (err) throw err;
});

fs.writeFile("test.txt", data, err => {
  if (err) throw err;
  console.log("successfully created test.txt file");
  
  fs.unlink("test.txt", err => {
    if (err) throw err;
    console.log("successfully deleted test.txt file");
  });
});

fs.rename("index2.txt", "renamedFile.txt", err => {
  if (err) throw err;
  console.log("renamed index2.txt to renamedFile.txt");
});