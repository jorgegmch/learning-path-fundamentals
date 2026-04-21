const camper = {
    nombre: "Diomedez",
    apellido: "Diaz",
    edad: 60,
    ocupacion: "Cantante"
};

const mijson = JSON.stringify(camper); // JS -> JSON

console.log(typeof mijson);
console.log(mijson);

const strJson = '{ "nombre":"Luis", "apellido":"Gonzalez", "edad":34, "ocupacion":"Auxiliar administrativo"}';

const camper2 = JSON.parse(strJson); // JSON -> JS
console.log(typeof camper2);
console.log(camper2);
