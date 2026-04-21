if (typeof(Storage) !== 'undefined') {
    localStorage.setItem("Nombre", "Andres");
    console.log(localStorage.getItem("Nombre"));
} else {
    console.log("NO se soporta el localStorage");
}