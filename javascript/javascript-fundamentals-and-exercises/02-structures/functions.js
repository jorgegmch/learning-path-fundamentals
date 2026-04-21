// FUNCIONES DECLARATIVAS
/*
    SINTAXIS:

    function nombre_funcion(parametros) {
        expresiones;
        [return valor_opcional]
    }
*/

// FUNCIONES SIN NOMBRE
/*
    SINTAXIS:

    let/const variable/constante = function(parametros) {
        expresiones;
        return valor_retorno;
    }
*/

const areaCirculo = function(radio) {
    return 3.1415926 * (radio ** 2);
}

console.log(areaCirculo(10));

// FUNCIONES FLECHA
/*
    SINTAXIS:

    let/const variable/constante = (parametros) => {
        expresiones;
        [return valor];
        }
*/

// FUNCIONES AUTO EJECUTABLES
/*
    SINTAXIS:

    (function (parametros) {
        expresiones;
    }) (argumentos);

Ejemplo: saludar a un camper por su nombre.
*/

(function(nombre) {
    console.log(`Hola camper, ${nombre}`);
}) ("Maria");

