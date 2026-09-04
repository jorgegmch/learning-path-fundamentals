// ==========================================================
// CONFIGURACIÓN
// ==========================================================
// Si el front se sirve desde la carpeta static/ de Spring Boot,
// se puede dejar la ruta relativa "/api/articulos".
// Si se abre el HTML por fuera (Live Server, doble clic, etc.)
// hay que usar la URL completa del backend.
var API_URL = "http://localhost:8080/api/articulos";

// ==========================================================
// ELEMENTOS DEL DOM
// ==========================================================
var listaArticulosDiv = document.getElementById("lista-articulos");
var mensajeCargandoP = document.getElementById("mensaje-cargando");
var contadorSpan = document.getElementById("contador-articulos");
var mensajeAlertaDiv = document.getElementById("mensaje-alerta");

var formulario = document.getElementById("formulario-articulo");
var inputId = document.getElementById("input-id");
var inputNombre = document.getElementById("input-nombre");
var inputValor = document.getElementById("input-valor");
var tituloFormularioH2 = document.getElementById("titulo-formulario");
var botonGuardar = document.getElementById("boton-guardar");
var botonCancelar = document.getElementById("boton-cancelar");

var panelFormularioSeccion = document.getElementById("panel-formulario");
var fondoFormularioDiv = document.getElementById("fondo-formulario");
var botonAbrirFormulario = document.getElementById("boton-abrir-formulario");
var botonCerrarFormulario = document.getElementById("boton-cerrar-formulario");

var inputBuscarId = document.getElementById("input-buscar-id");
var botonBuscar = document.getElementById("boton-buscar");
var resultadoBusquedaSeccion = document.getElementById("resultado-busqueda");
var resultadoBusquedaContenidoDiv = document.getElementById("resultado-busqueda-contenido");
var botonCerrarBusqueda = document.getElementById("boton-cerrar-busqueda");

// ==========================================================
// ESTADO DEL FORMULARIO
// ==========================================================
var modoEdicion = false;

// ==========================================================
// INICIO
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {
    cargarArticulos();
});

// ==========================================================
// GET /api/articulos - Listar todos los artículos
// ==========================================================
function cargarArticulos() {
    mensajeCargandoP.style.display = "block";
    listaArticulosDiv.innerHTML = "";

    fetch(API_URL)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con error al listar los artículos.");
            }
            return respuesta.json();
        })
        .then(function (articulos) {
            mensajeCargandoP.style.display = "none";
            pintarListaArticulos(articulos);
        })
        .catch(function (error) {
            mensajeCargandoP.style.display = "none";
            mostrarAlerta("No se pudieron cargar los artículos. Verifica que el backend esté corriendo.", "error");
            console.log(error);
        });
}

function pintarListaArticulos(articulos) {
    listaArticulosDiv.innerHTML = "";
    contadorSpan.textContent = articulos.length + " artículo(s)";

    if (articulos.length === 0) {
        listaArticulosDiv.innerHTML = "<p class='mensaje-vacio'>Todavía no hay artículos cargados. Usá el botón + para agregar el primero.</p>";
        return;
    }

    for (var i = 0; i < articulos.length; i++) {
        var tarjeta = crearTarjetaArticulo(articulos[i]);
        listaArticulosDiv.appendChild(tarjeta);
    }
}

function crearTarjetaArticulo(articulo) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-articulo";

    var nombreH3 = document.createElement("h3");
    nombreH3.className = "tarjeta-nombre";
    nombreH3.textContent = articulo.nombre;

    var valorP = document.createElement("p");
    valorP.className = "tarjeta-valor";
    valorP.textContent = formatearMoneda(articulo.valor);

    var idSpan = document.createElement("span");
    idSpan.className = "tarjeta-id";
    idSpan.textContent = "ID: " + articulo.id;

    var accionesDiv = document.createElement("div");
    accionesDiv.className = "tarjeta-acciones";

    var botonEditar = document.createElement("button");
    botonEditar.type = "button";
    botonEditar.className = "boton boton-editar";
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", function () {
        activarModoEdicion(articulo);
    });

    var botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.className = "boton boton-eliminar";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        eliminarArticulo(articulo.id);
    });

    accionesDiv.appendChild(botonEditar);
    accionesDiv.appendChild(botonEliminar);

    tarjeta.appendChild(nombreH3);
    tarjeta.appendChild(valorP);
    tarjeta.appendChild(idSpan);
    tarjeta.appendChild(accionesDiv);

    return tarjeta;
}

function formatearMoneda(valor) {
    var numero = Number(valor);
    if (isNaN(numero)) {
        return "$ 0";
    }
    return "$ " + numero.toFixed(2);
}

// ==========================================================
// GET /api/articulos/{id} - Buscar un artículo puntual
// ==========================================================
botonBuscar.addEventListener("click", function () {
    var idBuscado = inputBuscarId.value.trim();

    if (idBuscado === "") {
        mostrarAlerta("Escribí un ID para buscar.", "error");
        return;
    }

    fetch(API_URL + "/" + idBuscado)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con error al buscar el artículo.");
            }
            return respuesta.json();
        })
        .then(function (articulo) {
            mostrarResultadoBusqueda(articulo);
        })
        .catch(function (error) {
            mostrarAlerta("Ocurrió un error al buscar el artículo.", "error");
            console.log(error);
        });
});

function mostrarResultadoBusqueda(articulo) {
    resultadoBusquedaContenidoDiv.innerHTML = "";

    if (articulo === null) {
        resultadoBusquedaContenidoDiv.innerHTML = "<p class='mensaje-vacio'>No existe ningún artículo con ese ID.</p>";
        resultadoBusquedaSeccion.style.display = "block";
        return;
    }

    var tarjeta = crearTarjetaArticulo(articulo);
    resultadoBusquedaContenidoDiv.appendChild(tarjeta);
    resultadoBusquedaSeccion.style.display = "block";
}

botonCerrarBusqueda.addEventListener("click", function () {
    resultadoBusquedaSeccion.style.display = "none";
    inputBuscarId.value = "";
});

// ==========================================================
// POST /api/articulos - Crear artículo
// ==========================================================
function crearArticulo(articulo) {
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articulo)
    })
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con error al crear el artículo.");
            }
            return respuesta.json();
        })
        .then(function (articuloCreado) {
            if (articuloCreado === null) {
                mostrarAlerta("El servidor no pudo crear el artículo. Revisá los datos ingresados.", "error");
                return;
            }
            mostrarAlerta("Artículo creado correctamente.", "exito");
            cerrarFormulario();
            cargarArticulos();
        })
        .catch(function (error) {
            mostrarAlerta("Ocurrió un error al crear el artículo.", "error");
            console.log(error);
        });
}

// ==========================================================
// PUT /api/articulos/{id} - Modificar artículo
// ==========================================================
function actualizarArticulo(articulo) {
    fetch(API_URL + "/" + articulo.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articulo)
    })
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con error al actualizar el artículo.");
            }
            return respuesta.json();
        })
        .then(function (articuloActualizado) {
            if (articuloActualizado === null) {
                mostrarAlerta("El servidor no pudo actualizar el artículo. Revisá los datos ingresados.", "error");
                return;
            }
            mostrarAlerta("Artículo actualizado correctamente.", "exito");
            cerrarFormulario();
            cargarArticulos();
        })
        .catch(function (error) {
            mostrarAlerta("Ocurrió un error al actualizar el artículo.", "error");
            console.log(error);
        });
}

// ==========================================================
// DELETE /api/articulos/{id} - Eliminar artículo
// ==========================================================
function eliminarArticulo(id) {
    var confirmacion = confirm("¿Seguro que querés eliminar el artículo con ID " + id + "?");

    if (!confirmacion) {
        return;
    }

    fetch(API_URL + "/" + id, {
        method: "DELETE"
    })
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con error al eliminar el artículo.");
            }
            return respuesta.json();
        })
        .then(function (seEliminoCorrectamente) {
            if (seEliminoCorrectamente === true) {
                mostrarAlerta("Artículo eliminado.", "exito");
                cargarArticulos();
            } else {
                mostrarAlerta("No se encontró el artículo para eliminar.", "error");
            }
        })
        .catch(function (error) {
            mostrarAlerta("Ocurrió un error al eliminar el artículo.", "error");
            console.log(error);
        });
}

// ==========================================================
// MANEJO DEL FORMULARIO (crear / editar)
// ==========================================================
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var idTexto = inputId.value.trim();
    var nombreTexto = inputNombre.value.trim();
    var valorTexto = inputValor.value.trim();

    if (idTexto === "" || nombreTexto === "" || valorTexto === "") {
        mostrarAlerta("Completá todos los campos antes de guardar.", "error");
        return;
    }

    var articuloBody = {
        id: Number(idTexto),
        nombre: nombreTexto,
        valor: Number(valorTexto)
    };

    if (modoEdicion) {
        actualizarArticulo(articuloBody);
    } else {
        crearArticulo(articuloBody);
    }
});

function activarModoEdicion(articulo) {
    modoEdicion = true;

    inputId.value = articulo.id;
    inputId.disabled = true;
    inputNombre.value = articulo.nombre;
    inputValor.value = articulo.valor;

    tituloFormularioH2.textContent = "Editar artículo";
    botonGuardar.textContent = "Guardar cambios";
    botonCancelar.style.display = "inline-block";

    abrirFormulario();
}

function activarModoCreacion() {
    modoEdicion = false;

    formulario.reset();
    inputId.disabled = false;

    tituloFormularioH2.textContent = "Nuevo artículo";
    botonGuardar.textContent = "Guardar";
    botonCancelar.style.display = "none";
}

// ==========================================================
// ABRIR / CERRAR EL PANEL DEL FORMULARIO
// ==========================================================
botonAbrirFormulario.addEventListener("click", function () {
    activarModoCreacion();
    abrirFormulario();
});

botonCerrarFormulario.addEventListener("click", function () {
    cerrarFormulario();
});

botonCancelar.addEventListener("click", function () {
    cerrarFormulario();
});

fondoFormularioDiv.addEventListener("click", function () {
    cerrarFormulario();
});

function abrirFormulario() {
    panelFormularioSeccion.classList.add("abierto");
    fondoFormularioDiv.classList.add("visible");
}

function cerrarFormulario() {
    panelFormularioSeccion.classList.remove("abierto");
    fondoFormularioDiv.classList.remove("visible");
    formulario.reset();
    inputId.disabled = false;
    modoEdicion = false;
}

// ==========================================================
// ALERTAS DE ÉXITO / ERROR
// ==========================================================
function mostrarAlerta(mensaje, tipo) {
    mensajeAlertaDiv.textContent = mensaje;
    mensajeAlertaDiv.className = "alerta";

    if (tipo === "exito") {
        mensajeAlertaDiv.classList.add("alerta-exito");
    } else {
        mensajeAlertaDiv.classList.add("alerta-error");
    }

    mensajeAlertaDiv.style.display = "block";

    window.setTimeout(function () {
        mensajeAlertaDiv.style.display = "none";
    }, 3500);
}
