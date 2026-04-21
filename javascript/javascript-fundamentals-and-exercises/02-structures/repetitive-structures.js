// ESTRUCTURAS REPETITIVAS

// FOR
/*
    SINTAXIS:

    for(inicializacion; parada; incremento) {
        espresiones;
    }

Ejemplo: imprima la tabla de multiplicar de un número dado.
*/

let num = 7;

for(let i=1; i <= 10; i=i+1) {
    console.log(`${num} * ${i} = ${num * i}`);
}

// FOR ... OF - Se usa para recorrer array, vectores o string.
/*
    SINTAXIS:
    
    for (let elemento of array) {
        expresiones;
    }

Ejemplo: imprimir las consonantes de una frase.
*/

let frase = "sintaxis";

let frase_min = frase.toLowerCase();

let frase_result = "";

for (let letra of frase_min) {
    switch(letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            break;
        default:
            frase_result += letra;
    }
}

console.log(frase_result);

// FOR ... IN - Se usa para recorrer las propiedades de un objeto.
/*
    SINTAXIS:

    for (let clave in objeto) {
        expresiones;
    }
*/

// WHILE
/*
    SINTAXIS:

    while (condición) {
        expresiones;
    }

Ejemplo: preguntar por la constraseña hasta que se digite la correcta.
*/

// FORMA 1
let password = "george123";

while (password !== "sintaxis") {
    console.log("Error. Contraseña no válida.\nVuelva a intentar.");
    contraseña = prompt("Ingrese la contraseña: ");
}
console.log("Bienvenido a la sala de los famosos.");

// FORMA 2
password = "george123";
let secreto = "sintaxis";
let i = -1;
let pal = "";
while (password !== "sintaxis") {
    console.log("Error. Contraseña no válida.\nVuelva a intentar.");
    pal += secreto.charAt(++i);
    password = pal;
}
console.log("Bienvenido a la sala de los famosos.");

// DO WHILE - Primero hace y luego evalua.
/*
    SINTAXIS:

    do {
        expresiones
    } while (condición)
*/

i = -1;
pal = "";
do {
    console.log("Error. Contraseña no válida\nVuelva a intentar.");
    pal += secreto.charAt(++i);
    password = pal;
} while (password !== "sintaxis");
console.log("Bienvenido a la sala de los famosos.");