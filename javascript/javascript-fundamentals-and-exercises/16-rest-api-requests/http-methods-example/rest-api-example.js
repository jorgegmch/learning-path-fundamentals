import * as api from "./api.js";

const btnCargar = document.getElementById("btnCargar");
const btnGuardar = document.getElementById("btnGuardar");
const btnLimpiar = document.getElementById("btnLimpiar");
const tablaCuerpo = document.getElementById("tablaCuerpo");
const mensaje = document.getElementById("mensaje");

const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputSexo = document.getElementById("sexo");
const inputModulos = document.getElementById("modulos");

btnCargar.addEventListener("click", cargarCampers);
btnGuardar.addEventListener("click", guardarCamper);
btnLimpiar.addEventListener("click", limpiarFormulario);

async function cargarCampers() {
    try {
        const campers = await api.obtenerTodosCampers();

        dibujarTabla(campers);
        mostrarMensaje(`Se cargaron ${campers.length} campers`, "exito");
    } catch (error) {
        mostrarMensaje(`Error al cargar: ${error.message}`, "error");
    }
}

function dibujarTabla(campers) {
    tablaCuerpo.innerHTML = "";

    if (campers.length === 0) {
        const fila = document.createElement("tr");
        fila.innerHTML =
            '<td colspan="6" style="text-align: center; color: #999;">No hay campers</td>';
        tablaCuerpo.appendChild(fila);
        return;
    }

    campers.forEach((camper) => {
        const fila = document.createElement("tr");

        // Calcular promedio de módulos
        let promedio = "N/A";
        if (camper.modulos && camper.modulos.length > 0) {
            const suma = camper.modulos.reduce(
                (total, m) => total + m.puntaje,
                0
            );
            promedio = (suma / camper.modulos.length).toFixed(1);
        }

        // Crear HTML de módulos
        let modulosHTML = "";
        if (camper.modulos && camper.modulos.length > 0) {
            modulosHTML = camper.modulos
                .map(
                    (m) =>
                        `<div class="modulo-item">${m.nombre}: ${m.puntaje}/100</div>`
                )
                .join("");
        } else {
            modulosHTML = '<div style="color: #999;">Sin módulos</div>';
        }

        // Llenar fila
        fila.innerHTML = `
    <td>${camper.id}</td>
    <td>${camper.nombre}</td>
    <td>${camper.edad}</td>
    <td>${camper.sexo}</td>
    <td class="modulos">
        ${modulosHTML}
        <div style="margin-top: 5px; font-weight: bold; color: #0066cc;">Promedio: ${promedio}</div>
    </td>
    <td class="acciones">
        <button class="btnEditar">Editar</button>
        <button class="btnEliminarFila">Eliminar</button>
    </td>
    `;

        // Agregar eventos a botones de la tabla
        const btnEditar = fila.querySelector(".btnEditar");
        const btnEliminarFila = fila.querySelector(".btnEliminarFila");

        btnEditar.addEventListener("click", () => {
            editarCamper(
                camper.id,
                camper.nombre,
                camper.edad,
                camper.sexo,
                camper.modulos || []
            );
        });

        btnEliminarFila.addEventListener("click", () => {
            funcionEliminarCamper(camper.id, camper.nombre);
        });

        tablaCuerpo.appendChild(fila);
    });
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;

    setTimeout(() => {
        mensaje.textContent = "";
        mensaje.className = "mensaje";
    }, 4000);
}

function limpiarFormulario() {
    inputId.value = "";
    inputNombre.value = "";
    inputEdad.value = "";
    inputSexo.value = "";
    inputModulos.value = "";
}

async function guardarCamper() {
    try {
        // obtener los valores en el formulario
        const id = inputId.value.trim();
        const nombre = inputNombre.value.trim();
        const edad = parseInt(inputEdad.value);
        const sexo = inputSexo.value.trim();
        const modulosTxt = inputModulos.value.trim();

        // validar datos
        if (!nombre || !edad || !sexo) {
            mostrarMensaje("Completa: Nombre, Edad y Sexo", "error");
            return;
        }

        if (edad < 18) {
            mostrarMensaje("La edad mínima es 18 años", "error");
            return;
        }

        const modulos = procesarModulos(modulosTxt);
        const camper = {
            nombre,
            edad,
            sexo,
            modulos,
        };

        if (id) {
            await actualizarCamper(camper);
        } else {
            await crearCamper(camper);
        }
    } catch (error) {
        mostrarMensaje(`Error: ${error.mensaje}`, "error");
    }
}

function procesarModulos(txt) {
    if (!txt) return [];

    const lineas = txt.split("\n");
    const modulos = [];
    lineas.forEach((linea, indice) => {
        linea = linea.trim();

        if (linea) {
            const partes = linea.split("-");
            if (partes.length === 2) {
                const nombre = partes[0].trim();
                const puntaje = parseInt(partes[1].trim());

                if (
                    nombre &&
                    !isNaN(puntaje) &&
                    puntaje >= 0 &&
                    puntaje <= 100
                ) {
                    modulos.push({
                        id: indice + 1,
                        nombre,
                        puntaje,
                    });
                }
            }
        }
    });

    return modulos;
}

async function crearCamper(camper) {
    try {
        const camperCreado = await api.createCamper(camper);
        mostrarMensaje(`Camper ${camperCreado.nombre} creado con exito`);
        limpiarFormulario();
        cargarCampers();
    } catch (error) {
        mostrarMensaje("Error al crear: " + error.message, "error");
    }
}

async function funcionEliminarCamper(id, nombre) {
    try {
        const confirmar = confirm(`¿Está seguro de eliminar a ${nombre}`);

        if (!confirmar)
            return;
    
        await api.eliminarCamperPorId(id);
        mostrarMensaje(`Camper ${nombre} has sido eliminado`, "exito");
        cargarCampers();
    } catch (error) {
        mostrarMensaje(`Error al eliminar: ${error.message}`, "error");
    }
}

window.addEventListener("DOMContentLoaded", cargarCampers);