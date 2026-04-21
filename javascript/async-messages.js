
// MENSAJE ASINCRÓNICO 

/* 
Recrea la siguiente secuencia:

A aparece cuando inicia el programa.
B aparece inmediatamente después de A.
C aparece 5 segundos después de A.
D aparece entre 2 y 5 segundos después de iniciar.
E aparece 2 segundos después de D.
F aparece 7 segundos después de B.
G aparece 2 segundos después de E.
H aparece 3 segundos después de G.

Cada evento imprime en la consola la secuencia anterior. 
*/

function mostrar(nombre, orden) {
    const ahora = new Date();
    const tiempo = `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;
    console.log(`${nombre} [Enviado de: ${orden}] apareció en ${tiempo}`);
}

function A(orden, callback) {
    setTimeout(function () {
        mostrar("A", orden);
        if (callback) callback();
    }, 0);
}

function B(orden, callback) {
    setTimeout(function () {
        mostrar("B", orden);
        if (callback) callback();
    }, 0);
}

function C(orden, callback) {
    setTimeout(function () {
        mostrar("C", orden);
        if (callback) callback();
    }, 5000);
}

function D(orden, callback) {
    const delay = Math.floor(Math.random() * 3000) + 2000;
    setTimeout(function () {
        mostrar("D", orden);
        if (callback) callback();
    }, delay);
}

function E(orden, callback) {
    setTimeout(function () {
        mostrar("E", orden);
        if (callback) callback();
    }, 2000);
}

function F(orden, callback) {
    setTimeout(function () {
        mostrar("F", orden);
        if (callback) callback();
    }, 7000);
}

function G(orden, callback) {
    setTimeout(function () {
        mostrar("G", orden);
        if (callback) callback();
    }, 2000);
}

function H(orden, callback) {
    setTimeout(function () {
        mostrar("H", orden);
        if (callback) callback();
    }, 3000);
}

A(1, function () {

    B(2, function () {
        F(3);
    });

    C(4);
});

D(5, function () {

    E(6, function () {

        G(7, function () {

            H(8);
        });
    });
});