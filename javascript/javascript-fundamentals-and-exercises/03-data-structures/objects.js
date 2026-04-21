// OBJETOS: es una unidad que la miramos como un conjunto de métodos.

const miAuto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Prius"
}

const persona = {
    nombre: "Andres",
    edad: 23,
    altura: 1.70,
    peso: 60,
    hobbie: () => console.log("la, la, la"),
    direccion: [{
        caller: 56,
        numero: "25-32",
        barrio: "Zona Franca"
    },
        {
            calle: 48,
            numero: "33A-25",
            barrio: "Cuadra Play"
        }]
};

console.log(typeof(persona));
console.log(persona.altura);
console.log(persona.direccion.barrio);
console.log(persona.direccion[1].barrio);
persona.hobbie();

const figura = {
    ancho:10,
    alto: 20,
    tipo: "circulo",
    area: (tipoFigura) => {
        switch(tipoFigura.toLowerCase()) {
            case "triangulo":
                return this.ancho * this.alto / 2;
            case "cuadrado":
                return this.ancho * this.alto;
            default:
                return NaN;
        }
    }
}

console.log("Area de la figura", figura.area("cuadrado"))
