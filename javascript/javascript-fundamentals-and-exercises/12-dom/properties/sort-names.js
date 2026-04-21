const cajaNombre = document.getElementById("nombre");
const txtNombres = document.getElementById("txtnombres");

function limpiar() {
    txtNombres.value = "";
}

function agregar() {
    const nombres = txtNombres.value.trim();
    const vnombre = (nombres !== "") ? nombres.split("\n") : [];
    const nuevoNombre = cajaNombre.value.trim();

    vnombre.push(nuevoNombre);
    vnombre.sort((a, b) =>
        (a.toLowerCase() === b.toLowerCase()) ? 0 :
            (a.toLowerCase() > b.toLowerCase()) ? 1 : -1
    );

    txtNombres.value = vnombre.join("\n");

    cajaNombre.value = "";
}