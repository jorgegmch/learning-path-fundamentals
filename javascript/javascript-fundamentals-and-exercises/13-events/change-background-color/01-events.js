const digitos = "0123456789ABCDEF";

const cambiaBackground = color => document.body.style.backgroundColor = color;

const getRandomBackground = () => Array(6).fill("").reduce(p => p += digitos[Math.floor(Math.random() * 16)], "#");

// Evento
document.getElementById("cambiaColor").addEventListener("click", () => { 
    const color = getRandomBackground();
    document.getElementsByTagName("p")[0].textContent = color;
    cambiaBackground(color);
});