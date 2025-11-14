document.getElementById("btnDividir").addEventListener("click", function () {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
        document.getElementById("resultado").textContent = "Não é possível dividir por zero.";
        return;
    }

    const resultado = n1 / n2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});
