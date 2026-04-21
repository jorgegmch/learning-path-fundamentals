const fecthRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

fecthRes
    .then((res) => res.json())
    .then((datos) => console.log(datos))
    .catch((error) => console.log("ERROR: " + error));

async function getData() {
    try{
        const result = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const datos = await result.json();
        console.log(datos);
    } catch (error) {
        console.error("ERROR: " + error);
    }
}

setTimeout(getData, 2000);