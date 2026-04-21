// ESTRUCTURAS CONDICIONALES EN JS

// IF - SINTAXIS

/*
    if (condición) {
        instrucciones;
    }

    Ejemplo:
    Hacer un programa que imprima si una persona es mayor o menor de edad.
*/

let edad = 17;

if (edad >= 18) {
    console.log("Es mayor de edad");
}

// IF - ELSE

/* 
    SINTAXIS

    if (condición) {
        espresion-verdadero;
    } else {
        expresion-falso;
    }
*/

edad = 22;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// IF - ELSE IF - ELSE

/*
    SINTAXIS

    if (condición 1) {
        expresion 1;
    } else if (condición 2) {
        expresion 2;
    } ...
    else {
        expresion-else;
    }

Ejemplo: Imprimir el mensaje correspondiente (niño, adolescente, adulto, adulto mayor) de acuerdo con la edad ingresada.
*/

edad = 38;

if (edad > 59) {
    console.log("Es un adulto mayor");
} else if (edad > 17) {
    console.log("Es un adulto");
} else if (edad > 14) {
    console.log("Es un adolescente");
} else {
    console.log("Es un niño");
}

// OPERADOR TERNARIO ?

/*
    SINTAXIS
    (condición) ? expresión-verdadera : expresión-falsa;
*/

// FORMA 1 - LARGA
(edad > 59) ? console.log("Es un adulto mayor") :
    (edad > 17) ? console.log("Es un adulto") :
        (edad > 14) ? console.log("Es un adolescente") :
            console.log("Es un niño");

// FORMA 2 - CORTA
console.log((edad > 59) ? "Es un adulto mayor" :
    (edad > 17) ? "Es un adulto" :
        (edad > 14) ? "Es un adolescente" :
            "Es un niño");

// SWITCH

/*
    SINTAXIS

    switch(variable) {
        case valor1:
            expresion1;
            break;
        case valor2:
            expresion2;
            break;
        case valor...n:
            expresion...n;
            break;
        default:
            expresion-default;
    }

Ejemplo: dado el valor númerico de un día a la semana, devuelva que día es.
*/

let valDia = 2;

switch(valDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miercoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    default:
        console.log("Sabado");
}

