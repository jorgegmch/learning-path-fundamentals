var API_URL = "/api/articulos";

var form = document.getElementById("articuloForm");
var inputId = document.getElementById("articuloId");
var inputCodigo = document.getElementById("codigo");
var inputNombre = document.getElementById("nombre");
var inputValor = document.getElementById("valor");
var formTitle = document.getElementById("formTitle");
var btnGuardar = document.getElementById("btnGuardar");
var btnCancelar = document.getElementById("btnCancelar");
var btnRecargar = document.getElementById("btnRecargar");
var btnBuscar = document.getElementById("btnBuscar");
var inputBuscar = document.getElementById("buscarInput");
var listaArticulos = document.getElementById("listaArticulos");
var mensaje = document.getElementById("mensaje");
var codigoGroup = document.getElementById("codigoGroup");

// Estado interno: true cuando el formulario está editando un artículo existente
var editando = false;

// Ajuste adaptativo de la altura disponible para la lista de artículos
function ajustarAlturaLista() {
    try {
        var header = document.querySelector('.header');
        var formSection = document.querySelector('.form-section');
        var listSection = document.querySelector('.list-section');

        var viewportHeight = window.innerHeight;
        var headerH = header ? header.offsetHeight : 0;
        var listHeader = listSection ? listSection.querySelector('.list-header') : null;
        var listHeaderH = listHeader ? listHeader.offsetHeight : 0;

        // Espacio extra por paddings/margins y un pequeño buffer
        var buffer = 32; // px

        // Detectar si estamos en layout de dos columnas (desktop/tablet)
        var isWide = (window.matchMedia && window.matchMedia('(min-width: 768px)').matches);

        // Altura disponible para el contenedor interno de la lista
        // En móvil/restacking: restamos header + form + listHeader. En modo ancho
        // (side-by-side) el form está a la izquierda, por tanto no ocupa altura vertical
        // adicional; solo restamos header y listHeader.
        var available;
        if (isWide) {
            available = viewportHeight - headerH - listHeaderH - buffer;
        } else {
            var formH = formSection ? formSection.offsetHeight : 0;
            available = viewportHeight - headerH - formH - listHeaderH - buffer;
        }
        if (available < 160) available = 160; // mínimo razonable

        // Aplicar como max-height al elemento que contiene las cards
        listaArticulos.style.maxHeight = available + 'px';
        listaArticulos.style.overflow = 'auto';
    } catch (e) {
        // si falla, no romper la app
        console.log('Error ajustando altura de la lista:', e);
    }
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo;
    setTimeout(function () {
        mensaje.className = "mensaje";
        mensaje.textContent = "";
    }, 4000);
}

function limpiarFormulario() {
    editando = false;
    inputId.value = "";
    inputCodigo.value = "";
    codigoGroup.style.display = "none";
    inputNombre.value = "";
    inputValor.value = "";
    formTitle.textContent = "Nuevo artículo";
    btnGuardar.textContent = "Guardar";
    btnCancelar.style.display = "none";
}

function formatoPrecio(valor) {
    var entero = Math.trunc(Number(valor));
    return "$ " + new Intl.NumberFormat("es-AR", {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    }).format(entero);
}

function mostrarCargando(mensajeTexto) {
    listaArticulos.innerHTML = "<div class='loading'><div class='spinner'></div><p>" + mensajeTexto + "</p></div>";
}

function renderTablaArticulos(articulos) {
    listaArticulos.innerHTML = "";

    if (!articulos || articulos.length === 0) {
        listaArticulos.innerHTML = "<p class='empty'>No hay artículos publicados.</p>";
        ajustarAlturaLista();
        return;
    }

    var tabla = document.createElement("table");
    tabla.className = "articulos-table";

    var thead = document.createElement("thead");
    thead.innerHTML = "<tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Acciones</th></tr>";

    var tbody = document.createElement("tbody");

    for (var i = 0; i < articulos.length; i++) {
        var articulo = articulos[i];
        var fila = document.createElement("tr");

        var tdId = document.createElement("td");
        tdId.textContent = articulo.id;

        var tdNombre = document.createElement("td");
        tdNombre.textContent = articulo.nombre;

        var tdPrecio = document.createElement("td");
        tdPrecio.textContent = formatoPrecio(articulo.valor);
        tdPrecio.className = "col-precio";

        var tdAcciones = document.createElement("td");
        tdAcciones.className = "table-actions";

        var btnEditar = document.createElement("button");
        btnEditar.className = "btn btn-edit btn-table";
        btnEditar.textContent = "Editar";
        btnEditar.onclick = crearEditarHandler(articulo);

        var btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-delete btn-table";
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = crearEliminarHandler(articulo.id);

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        fila.appendChild(tdId);
        fila.appendChild(tdNombre);
        fila.appendChild(tdPrecio);
        fila.appendChild(tdAcciones);

        tbody.appendChild(fila);
    }

    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    listaArticulos.appendChild(tabla);
    ajustarAlturaLista();
}

function cargarArticulos() {
    mostrarCargando("Cargando artículos...");

    fetch(API_URL)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (articulos) {
            renderTablaArticulos(articulos);
        })
        .catch(function (error) {
            listaArticulos.innerHTML = "<p class='empty'>Error al cargar artículos.</p>";
            console.log("Error:" + error);
            ajustarAlturaLista();
        });
}

function crearEditarHandler(articulo) {
    return function () {
        editando = true;
        inputId.value = articulo.id;
        inputCodigo.value = articulo.id;
        codigoGroup.style.display = "block";
        inputNombre.value = articulo.nombre;
        inputValor.value = articulo.valor;
        formTitle.textContent = "Editar artículo";
        btnGuardar.textContent = "Actualizar";
        btnCancelar.style.display = "inline-block";
        window.scrollTo(0, 0);
    };
}

function crearEliminarHandler(id) {
    return function () {
        var confirmar = confirm("¿Estás seguro de eliminar el artículo con ID " + id + "?");
        if (confirmar === false) {
            return;
        }

        fetch(API_URL + "/" + id, {
            method: "DELETE"
        })
            .then(function (respuesta) {
                return respuesta.json().then(function (data) {
                    return { ok: respuesta.ok, data: data };
                });
            })
            .then(function (resultado) {
                if (resultado.ok === false) {
                    throw new Error(resultado.data.message || "Error al eliminar");
                }
                mostrarMensaje("Articulo eliminado", "success");
                cargarArticulos();
            })
            .catch(function (error) {
                mostrarMensaje(error.message, "error");
                console.log("Error:" + error);
            });
    };
}

form.onsubmit = function (evento) {
    evento.preventDefault();

    var nombre = inputNombre.value.trim();
    var valorTexto = inputValor.value.trim();
    var valor = parseInt(valorTexto, 10);

    if (nombre === "") {
        mostrarMensaje("El nombre no puede estar vacío", "error");
        return;
    }

    if (valorTexto === "" || !/^\d+$/.test(valorTexto) || isNaN(valor) || valor <= 0) {
        mostrarMensaje("El precio debe ser un número entero positivo", "error");
        return;
    }

    var articulo = {
        nombre: nombre,
        valor: valor
    };

    var url = API_URL;
    var metodo = "POST";

    if (editando === true) {
        var id = parseInt(inputId.value, 10);
        url = API_URL + "/" + id;
        metodo = "PUT";
    }
    console.log("URL" + url);

    fetch(url, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articulo)
    })
        .then(function (respuesta) {
            return respuesta.json().then(function (data) {
                return { ok: respuesta.ok, status: respuesta.status, data: data };
            });
        })
        .then(function (resultado) {
            if (resultado.ok === false) {
                throw new Error(resultado.data.message || "Error en la peticion");
            }
            mostrarMensaje("Operacion exitosa", "success");
            limpiarFormulario();
            cargarArticulos();
        })
        .catch(function (error) {
            mostrarMensaje(error.message, "error");
            console.log("Error:" + error);
        });
};

btnCancelar.onclick = function () {
    limpiarFormulario();
};

btnRecargar.onclick = function () {
    cargarArticulos();
};

btnBuscar.onclick = function () {
    var id = inputBuscar.value.trim();

    if (id === "") {
        cargarArticulos();
        return;
    }

    if (!/^\d+$/.test(id)) {
        listaArticulos.innerHTML = "<p class='empty'>Ingresa un ID numérico válido.</p>";
        ajustarAlturaLista();
        return;
    }

    mostrarCargando("Buscando artículo...");

    fetch(API_URL + "/" + id)
        .then(function (respuesta) {
            return respuesta.json().then(function (data) {
                return { ok: respuesta.ok, status: respuesta.status, data: data };
            });
        })
        .then(function (resultado) {
            var payload = resultado.data || {};

            if (resultado.ok === false) {
                var msg = payload.message || "No se encontró el artículo.";
                listaArticulos.innerHTML = "<p class='empty'>" + msg + "</p>";
                ajustarAlturaLista();
                return;
            }

            // El backend devuelve Articulo plano
            var articulo = payload;

            if (!articulo || typeof articulo.id === "undefined") {
                listaArticulos.innerHTML = "<p class='empty'>No se pudo interpretar la respuesta del servidor.</p>";
                ajustarAlturaLista();
                return;
            }

            renderTablaArticulos([articulo]);
        })
        .catch(function (error) {
            listaArticulos.innerHTML = "<p class='empty'>Error al buscar el artículo.</p>";
            console.log("Error:" + error);
            ajustarAlturaLista();
        });
};

cargarArticulos();

// Ajustar al inicio y en cambios de tamaño/orientación
window.addEventListener('resize', function () {
    // throttle sencillo
    if (this._resizeTimeout) clearTimeout(this._resizeTimeout);
    this._resizeTimeout = setTimeout(function () {
        ajustarAlturaLista();
    }, 120);
});

window.addEventListener('orientationchange', function () {
    setTimeout(ajustarAlturaLista, 200);
});

// también ajustar cuando el DOM cambia visualmente (p. ej. mostrar/ocultar cancelar)
var observer = new MutationObserver(function () {
    ajustarAlturaLista();
});
observer.observe(document.body, { attributes: true, childList: true, subtree: true });