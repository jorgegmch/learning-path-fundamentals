document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorMessageElement = document.getElementById("error-message");

    if (errorMessageElement) {
        errorMessageElement.innerText = '';
    }

    // console.log("PUNTO A");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evitar recarga del formulario

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        

        if (errorMessageElement) {
            errorMessageElement.innerText = '';
        }

        try {
            const response = await fetch('/springsecuriytbasic-0.0.1-SNAPSHOT/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
                credentials: 'same-origin' // 🛠 HABILITAR ENVÍO DE COOKIES Y SESIÓN
            });

            const result = await response.json();

            // alert("RESULTADO: " + " " + username + " " + password);

            resultadoLogin(result, errorMessageElement, username, password)

            /*
            if (result.autenticacion) {
                sessionStorage.setItem("username", username);
                sessionStorage.setItem("password", password);
                
                console.log("✅ Usuario autenticado, redirigiendo a:", result.redirect);

                // 🚀 Usar replace() para forzar la navegación
                setTimeout(() => {
                    window.location.replace(result.redirect);
                }, 500);
            } else {
                errorMessage.innerText = result.error || "Error en la autenticación";
            }
            */
        } catch (error) {
            console.error('❗ Error en la solicitud: ' + error);
            if (errorMessageElement) {
                errorMessageElement.innerText = "Ocurrió un error de conexión. Intenta de nuevo.";
            }
        }
    });
});



function resultadoLogin(result, errorMessageElement, username, password) {
    /*// alert("autenticacion: " + result.autentication 
        + "\nusername: "+ username 
        + "\npassword: "+ password 
        + "\nRedirect: "+result.redirect
        + "\nerrorMessage"+errorMessage) ;*/

    /* alert("Login Result:" + "\n" +
        result.autentication + "\n" + // O `autentication` como en tu LoginController
        username + "\n" +
        // CUIDADO: NO loguear la contraseña en consolas de producción
        // password: password, 
        result.redirect + "\n" +
        result.error
    );*/

    if (result.autentication) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);

        console.log("✅ Usuario autenticado, redirigiendo a:" + result.redirect);

        // alert("✅ Usuario autenticado, redirigiendo a:"+ result.redirect)

        // 🚀 Usar replace() para forzar la navegación
        window.location.replace(result.redirect);
        /*setTimeout(() => {
            window.location.replace(result.redirect);
        }, 500);*/
    } else {
        if (errorMessageElement) {
            errorMessageElement.innerText = "❌ Fallo de autenticación:" + (result.error || "Error en la autenticación. Credenciales incorrectas.");
        }
        console.error("❌ Fallo de autenticación: " + result.error || " Respuesta de autenticación fallida. ");
    }
}
