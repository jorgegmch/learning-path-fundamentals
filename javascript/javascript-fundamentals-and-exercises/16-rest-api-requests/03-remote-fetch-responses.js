const fecthRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

fecthRes
    .then((res) => res.json())
    .then((datos) => console.log(datos))
    .catch((error) => console.error("ERROR: " + error));

async function getData() {
    try {
        const result = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const respuesta = {
            status: result.status,
            statusText: result.statusText,
            ok: result.ok,
            url: result.url,
            type: result.type,
            headers: result.headers,
        };

        console.table(respuesta);

        console.log("\n================================\n");

        if (result.ok) {
            const datos = await result.json();
            console.table(datos);
        }
    } catch (error) {
        console.error("ERROR: " + error);
    }
}

setTimeout(getData, 2000);