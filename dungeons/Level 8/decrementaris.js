document.getElementById("btnDecrementar").addEventListener("click", function () {
    let valor = Number(document.getElementById("valor").value);

    valor--; // decrementa -1

    document.getElementById("resultado").textContent = "Novo valor: " + valor;
});
