document.querySelector("button").addEventListener("click", e => {
    e.stopPropagation();
    document.querySelector("i").textContent = `Cliqueaste en ${e.target.nodeName}`;
    setTimeout(() => document.querySelector("i").textContent = "", 2000);
});

document.querySelector("span").addEventListener("click", e => alert("Cliqueaste en el SPAN"));

document.querySelector("div").addEventListener("click", e => alert("Cliqueaste en el DIV"));

document.body.addEventListener("click", e => alert("Cliqueaste en el BODY"));