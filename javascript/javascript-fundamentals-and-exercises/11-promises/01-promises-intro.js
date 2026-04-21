// PROMESAS

/*
    SINTAXIS

    1. DECLARACIÓN
    const miPromesa = new Promisse((resolve, reject) => { ... });

    2. EJECUCIÓN
    miPromesa
    .then(resuelve => { ... })
    .catch(error = { ... });
*/

const miPromesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        console.log("Esperando...");
        setTimeout(() => resolve("Promesa cumplida"), 2000);
    } else {
        reject("Promesa rechazada");
    }
});

// EJECUCIÓN DE LA PROMESA
miPromesa
    .then(respuesta => {
        console.log("No hubo errores en la promesa");
        console.log(respuesta);
    }).catch(error => {
        console.log("ERROR en la promesa");
        console.log(error);
    });