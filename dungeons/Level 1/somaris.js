document.getElementById("btnSomar").addEventListener("click", function () {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);

    const resultado = n1 + n2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});
