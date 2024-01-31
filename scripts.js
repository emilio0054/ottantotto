const flagsElement = document.getElementById("flags");

flagsElement.addEventListener("click", (e) => {
  console.log(e.target.parentElement);
});

console.log("El archivo scripts.js está cargado correctamente.");
