const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

let operacion = "";
let clickTimer = null;

function actualizarPantalla() {
    pantalla.textContent = operacion || "0";
}

botones.forEach(btn => {
    const valor = btn.textContent;

    if (btn.classList.contains("numero")) {
        btn.addEventListener("click", () => {
            operacion += valor;
            actualizarPantalla();
        });
    }

    if (btn.classList.contains("operador")) {
        btn.addEventListener("click", () => {
            if (/[\+\-\*\/]$/.test(operacion)) return;

            operacion += valor;
            actualizarPantalla();
        });
    }

    if (btn.id === "punto") {
        btn.addEventListener("click", () => {
            operacion += ".";
            actualizarPantalla();
        });
    }

    if (btn.id === "igual") {
        btn.addEventListener("click", () => {
            try {
                operacion = eval(operacion).toString();
            } catch {
                operacion = "Error";
            }
            actualizarPantalla();
        });
    }

    if (btn.id === "limpiar") {
        btn.addEventListener("click", () => {
            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    // Borrar último carácter
                    operacion = operacion.slice(0, -1);
                    actualizarPantalla();
                    clickTimer = null;
                }, 250);
            }
        });

        btn.addEventListener("dblclick", () => {
            clearTimeout(clickTimer);
            clickTimer = null;
            operacion = "";
            actualizarPantalla();
        });
    }
});
