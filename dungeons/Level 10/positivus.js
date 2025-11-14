document.getElementById("btnVerificar").addEventListener("click", function () {
    const numero = Number(document.getElementById("numero").value);

    let mensagem = "";

    if (numero > 0) {
        mensagem = "O número é positivo.";
    } else if (numero < 0) {
        mensagem = "O número é negativo.";
    } else {
        mensagem = "Zero é neutro.";
    }

    document.getElementById("resultado").textContent = mensagem;
});
