document.getElementById("btnIncrementar").addEventListener("click", function () {
    let valor = Number(document.getElementById("valor").value);

    valor++; // incrementa +1

    document.getElementById("resultado").textContent = "Novo valor: " + valor;
});
