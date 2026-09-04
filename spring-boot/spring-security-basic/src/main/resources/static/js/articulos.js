document.addEventListener("DOMContentLoaded", () => {
    cargarArticulos();

    document.getElementById("logout-btn").addEventListener("click", async () => {
        try {
            const response = await fetch('/springsecuriytbasic-0.0.1-SNAPSHOT/logout', {
                method: 'POST',
                credentials: 'same-origin' // Importante para que Spring Security maneje el logout correctamente
            });

            if (response.ok) {
                sessionStorage.clear();

            } else {
                console.error("❗ Error al cerrar sesión");
                alert("❗ Error al cerrar sesión");
            }

        } catch (error) {
            console.error('❗ Error en el logout:', error);
            alert("❗ Error al cerrar sesión");
        } finally {
            window.location.href = "index.html";
        }
    });
});

async function cargarArticulos() {
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");

    // alert("username: "+ username
    //        + "\npassword: "+ password);

    if (!username || !password) {
        window.location.href = "index.html";
        return;
    }

    try {
        const response = await fetch('/springsecuriytbasic-0.0.1-SNAPSHOT/api/articulos', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
        });
        // alert("response.ok: "+ response.ok);

        if (response.ok) {
            const data = await response.json();
            const tableBody = document.getElementById("articulos-body");
            /*let strTableBody = "";

            data.forEach(articulo => {
                const row = `<tr>
                                <td>${articulo.id}</td>
                                <td>${articulo.nombre}</td>
                                <td>${articulo.descripcion}</td>
                             </tr>`;
                strTableBody += row;
            });*/

            tableBody.innerHTML = data.reduce((p, articulo) =>
                p += `<tr>
                            <td>${articulo.id}</td>
                            <td>${articulo.nombre}</td>
                            <td>${articulo.descripcion}</td>
                        </tr>`, "");
            //alert(strTableBody);

            // alert("response.ok: "+ tableBody.innerHTML);
        } else {
            throw new Error("Acceso no autorizado");
        }
    } catch (error) {
        console.error('Error: ', error);
        window.location.href = "index.html";
    }
}
