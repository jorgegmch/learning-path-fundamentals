const boton1 = document.querySelectorAll("button")[0];
const boton2 = document.querySelectorAll("button")[1];

boton1.addEventListener("click", () =>
    alert("Botón cliqueado"), { 
        once: true,
    });

function mensaje() {
    alert("Este mensaje solo aparece una vez, porque se remueve el evento");
    boton2.removeEventListener("click", mensaje);
}

boton2.addEventListener("click", mensaje);