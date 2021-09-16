const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
};



document.getElementById("text-submit").addEventListener("click", () => {
  const text = document.getElementById("user-input").value;
  const warning = document.getElementById("warning");

  if (!text) {
    warning.textContent = "Enter something into the text field.";
  } else {
    downloadToFile(text, "created-file.txt", "text/plain");
  };
});