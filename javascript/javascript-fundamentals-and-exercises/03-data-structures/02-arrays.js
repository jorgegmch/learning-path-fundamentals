// ARRAYS

const paises = new Array(5);

paises[0] = "Colombia";
paises[1] = "Venezuela";
paises[2] = "Ecuador";
paises[5] = "Brasil";

// RECORRIDO POR INDICE
for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

// DECLARACIÓN LITERAL ([])
const frutas = []; // Array vacío
const mixtos = ["papas", "patacones", "chicharrones", "arepitas"];

// DECLARACIÓN CON ARRAY Y ELEMENTOS ESPECIFICOS
const frutasExoticas = new Array("Kiwi", "Chontaduro", "Granada");

// DECLARACIÓN CON ARRAY.FROM()
const letras = Array.from("Hola"); // ['H', 'o', 'l', 'a']

// DECLARACIÓN CON ARRAY.OF()
const numeros = Array.of(7) // [7]
const numero2 = Array.of(5, 10, 20) // [5, 10, 20]

// RECORRIDO DE LOS ARRAY POR LOS ELEMENTOS
for(let fe of frutasExoticas) {
    console.log(fe);
}

// 1. MÉTODOS DE LOS ARRAYS

// MÉTODO PUSH: agrega al final
numeros.push(13);
console.log(numeros);

// MÉTODO UNSHIFT: agrega al inicio
numero2.unshift(90);
console.log(numeros);

// MÉTODO POP: elimina el último elemento
numeros.pop();
console.log(numeros);

// MÉTODO SHIFT: elimina el primer elemento
numeros.shift();
console.log(numeros);


// 2. MÉTODOS FUNCIONALES

// MÉTODO MAP: recorre el array y crea uno nuevo aplicandole una función a cada elemento
console.log(frutasExoticas.map((fruta) => fruta.toUpperCase()));

// MÉTODO FILTER: crea un Array con todos los elementos que cumplen la condición de una función
console.log(
    frutasExoticas.filter(f => f.endsWith("a"))
);

console.log(
    frutasExoticas.filter(f => f.length > 5)
);

console.log(
    frutasExoticas.filter(f => {
        let cantVocales = 0;
        for(let letra of f) {
            switch(letra) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    ++cantVocales;
                    break;
            }
        }
        return cantVocales > 3;
    })
);

// FOREACH: ejecuta una función por cada elemento del array.
emails.forEach(e => enviarEmail(e));
for (let email of emails) {
    enviarEmail(email);
}

frutasExoticas.forEach(f => console.log(f.toUpperCase()));

// SOME: verifica si al menos un elemento cumple con la condición.
console.log(
    frutasExoticas.some(f => f.length > 5)
);

// EVERY: verifica si todos cumple con la condición
console.log(
    frutasExoticas.every(f => f.length > 5)
);

// FIND: busca y devuelve el primer elemento que cumpla con la condición
console.log(
    frutasExoticas.find(f => f.length > 5)
);



