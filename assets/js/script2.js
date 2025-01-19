// Almacenar el color
let currentColor = "white";

// Cambiar el color de un div existente
function changeColor(element, color) {
  element.style.backgroundColor = color;
}

// Crear un nuevo div con el color especificado
function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("new-div");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}

// Seleccionar el div principal
const keyDiv = document.getElementById("key");

// Manejar las teclas presionadas
document.addEventListener("keydown", function (event) {
  // Cambiar el color del div existente
  if (event.key === "a") {
    currentColor = "pink"; // Rosado
    changeColor(keyDiv, currentColor);
  } else if (event.key === "s") {
    currentColor = "orange"; // Naranjo
    changeColor(keyDiv, currentColor);
  } else if (event.key === "d") {
    currentColor = "skyblue"; // Celeste
    changeColor(keyDiv, currentColor);
  }

  // Crear un nuevo div con los colores específicos
  if (event.key === "q") {
    createNewDiv("purple"); // Morado
  } else if (event.key === "w") {
    createNewDiv("gray"); // Gris
  } else if (event.key === "e") {
    createNewDiv("brown"); // Café
  }
});
