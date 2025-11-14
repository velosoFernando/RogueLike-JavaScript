document.getElementById("btnExponenciar").addEventListener("click", function () {
    const base = Number(document.getElementById("base").value);
    const expoente = Number(document.getElementById("expoente").value);

    const resultado = base ** expoente;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});
