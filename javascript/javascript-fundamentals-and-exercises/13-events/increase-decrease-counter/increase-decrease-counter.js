const btnAumentar = document.querySelector(".btn-info");
const btnDisminuir = document.querySelector(".btn-danger");
const contador = document.getElementById("contador");

let varContador = 0;

btnAumentar.addEventListener("click", () => {
    contador.textContent = ++varContador;
});

btnDisminuir.addEventListener("click", () => {
    contador.textContent = --varContador;
});