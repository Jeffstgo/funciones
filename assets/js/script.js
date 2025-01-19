function pintar(element, color = "green") {
  element.style.backgroundColor = color;
}

// Obtener el elemento
const ele = document.getElementById("ele1");

// Pintar en verde por defecto al cargar
pintar(ele);

// Cambiar a amarillo al hacer clic
ele.addEventListener("click", () => pintar(ele, "yellow"));
