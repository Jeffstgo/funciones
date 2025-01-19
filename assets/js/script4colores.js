// Función para cambiar el color de un div a negro
function changeToBlack(element) {
  element.style.backgroundColor = "black";
}

// Obtener los divs por su id
const blueDiv = document.getElementById("blue");
const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const yellowDiv = document.getElementById("yellow");

// Agregar eventos a cada div
blueDiv.addEventListener("click", () => changeToBlack(blueDiv));
redDiv.addEventListener("click", () => changeToBlack(redDiv));
greenDiv.addEventListener("click", () => changeToBlack(greenDiv));
yellowDiv.addEventListener("click", () => changeToBlack(yellowDiv));
