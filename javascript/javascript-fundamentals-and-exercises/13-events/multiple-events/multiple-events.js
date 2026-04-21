const boton = document.getElementById("cambiaColor");
const parrafo = document.querySelector("p");

// Evento con propiedad
boton.onclick = () => alert("Haz presionado el botón");

// Evento #2
boton.addEventListener("mouseover", () => parrafo.style.color = "tomato");

// Evento #3
boton.addEventListener("mouseout", () => parrafo.style.color = "purple");