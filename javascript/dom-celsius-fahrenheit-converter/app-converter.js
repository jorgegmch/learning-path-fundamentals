const centigrados = document.getElementById("centigrados");
const inputFahrenheit = document.getElementById("fahrenheit");
const btonCalcular = document.getElementById("bton-calcular");

btonCalcular.addEventListener("click", function(event) {
    event.preventDefault();

    const celsius = parseFloat(centigrados.value);

    if (isNaN(celsius)) {
        inputFahrenheit.value = "";
        alert("Por favor ingresa un número válido.");
        return;
    }

    const resultado = (celsius * 9 / 5) + 32;

    inputFahrenheit.value = resultado.toFixed(2);
});
