const readTxtFile = () => {
  document.getElementById("read-button").addEventListener("click", () => {
    if (document.querySelector("#file-input").files.length == 0) {
      alert('Error : No file selected');
      return;
    };

    let file = document.getElementById("file-input").files[0];
    let reader = new FileReader();

    reader.addEventListener("load", e => {
      let text = e.target.result;

      document.getElementById("file-content").textContent = text;
    });

    reader.addEventListener('error', function() {
        alert('Error : Failed to read file');
    });

    reader.readAsText(file);
  });
};

readTxtFile();


const readTextFile2 = () => {
  const fileUrl = "./index.txt";
  
  fetch(fileUrl)
  .then( response => response.text() )
  .then( text => console.log(text, 'console log') );
};

readTextFile2();