document.getElementById("btnVerificar").addEventListener("click", function () {
    const numero = Number(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado").textContent = "É par.";
    } else {
        document.getElementById("resultado").textContent = "É ímpar.";
    }
});
