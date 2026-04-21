const camper = {
    nombre: "Pedro Pablo",
    edad: 18,
    genero: "masculino",
    profesion: "estudiante",
    modulos: []
};

camper.modulos.push({
    nombre: "introducción a la programación",
    score: 75
});
camper.modulos.push({
    nombre: "Consola Linux",
    score: 90
});
camper.modulos.push({
    nombre: "Python",
    score: 50
});

const vCampers = [camper, camper, camper];

const btnGuardar = document.getElementsByTagName("button")[0];
const btnRecuperar = document.getElementsByTagName("button")[1];
const btnIterar = document.getElementsByTagName("button")[2];
const btnTema = document.getElementsByTagName("button")[3];

btnGuardar.addEventListener("click", () => {
    localStorage.setItem("campers", JSON.stringify(vCampers));
    alert("Guardado exitosamente");
})

btnRecuperar.addEventListener("click", () => {
    const strCampers = localStorage.getItem("campers");
    alert("Datos recuperados exitosamente");

    console.log(strCampers);

    const objCampers = JSON.parse(strCampers);
    console.table(objCampers);
});

btnIterar.addEventListener("click", () => {
    const strCampers = localStorage.getItem("campers");
    const objCampers = JSON.parse(strCampers);

    Object.keys(objCampers).forEach(llave => {
        console.log(llave, " -> ", localStorage[llave]);
    });
});

btnTema.addEventListener("click", () => {
    const temaActual = localStorage.getItem("tema") || "oscuro";
    const estilos = 
        temaActual === "oscuro" ?
            "body { background: #121212; color: #fff;}" :
            "body { background: #fff; color: #000;}";

    document.getElementById("estilos").textContent = estilos;
    
    const nuevoTema = temaActual === "claro" ? "oscuro" : "claro";
    localStorage.setItem("tema", nuevoTema);
    // location.reload();
});

