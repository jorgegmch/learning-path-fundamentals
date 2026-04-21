// ARRAYS

// Definir un Array:

// FORMA 1 - Funciona parecido a una lista
const frutas = new Array("Mango", "Banano", "Lulo");

console.log(typeof frutas);
console.log(frutas);

// FORMA 2 - Indicando la longitud
const campers = new Array(5);

console.log(campers);
campers[0] = "Hugo";
campers[2] = "Paco";
campers[4] = "Luis";
console.log(campers);

// FORMA 3 - Llenarlo con un valor predeterminado
const votos = new Array(10).fill(0);

console.log(votos);

