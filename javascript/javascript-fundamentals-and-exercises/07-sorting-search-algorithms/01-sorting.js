const frutas = ["mango", "banano", "lulo", "guayaba", "mora", "banano"];
const precios = [45000, 89000, 12000, 65000, 35000];

console.log(frutas);
frutas.sort(); // Timsort: mergeSort y Insertion Sort o(nlog n)
console.log(frutas);

// console.log(precios);
// precios.sort();
// console.log(precios);

// Ordenar de manera descendente
console.log(precios);
precios.sort((a, b) => b - a);
console.log(precios);

// Ordenar el vector de frutas por la cantidad de caracteres de la fruta
const frutas2 = ["mango", "banano", "lulo", "guayaba", "mora,", "banano", "mara"];

console.log(frutas2);
// frutas2.sort((fr1, fr2) => fr1.length - fr2.length);
frutas2.sort((fr1, fr2) => {   
    const dif = fr1.length - fr2.length;
    return (dif !== 0) ? dif : (fr1 > fr2) ? 1 : -1;
    // if (dif !== 0)
    //    return dif;
    // else
    //    return (fr1 > fr2) ? 1 : -1;
})
console.log(frutas2);

const campers = [
    {
        nombre: "Diomedez",
        edad: 60,
        score: 5
    },
    {
        nombre: "Maria",
        edad: 19,
        score: 80
    },
    {
        nombre: "Victor",
        edad: 30,
        score: 73
    }
];

console.log(campers);
campers.sort((c1, c2) => c2.score - c1.score);
console.log(campers);
