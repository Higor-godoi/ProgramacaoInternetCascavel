// Este é o arquivo script.js
// Ele contém o código JavaScript para a calculadora da padaria.

// Define a função que será chamada quando o botão "Calcular" for clicado.
function calcularVendas() {
    // 1. Pegar os valores digitados nos campos de input.
    let inputPaes = document.getElementById("quantidadePaes");
    let inputBroas = document.getElementById("quantidadeBroas");

    // 2. Converter os valores de texto para números.
    let quantidadePaes = +inputPaes.value;
    let quantidadeBroas = +inputBroas.value;

    // 3. Validar a entrada do usuário.
    //    Verificamos se quantidadePaes NÃO é um número (isNaN) OU se é menor que zero.
    if (isNaN(quantidadePaes) || quantidadePaes < 0) {
        alert("Por favor, digite uma quantidade válida e não negativa para os pães.");
        return; // Para a execução da função
    }

    // Fazemos a mesma validação para a quantidade de broas.
    if (isNaN(quantidadeBroas) || quantidadeBroas < 0) {
        alert("Por favor, digite uma quantidade válida e não negativa para as broas.");
        return; // Para a execução da função
    }

    // Definir os preços dos produtos
    const precoPao = 0.12;
    const precoBroa = 1.50;

    // 4. Realizar os cálculos (esta parte só executa se a validação passar).
    let totalPaes = quantidadePaes * precoPao;
    let totalBroas = quantidadeBroas * precoBroa;
    let totalArrecadado = totalPaes + totalBroas;
    let valorPoupanca = totalArrecadado * 0.10;

    // 5. Exibir os resultados na página HTML.
    let spanTotalArrecadado = document.getElementById("totalArrecadado");
    let spanValorPoupanca = document.getElementById("valorPoupanca");

    spanTotalArrecadado.textContent = "R$ " + totalArrecadado.toFixed(2);
    spanValorPoupanca.textContent = "R$ " + valorPoupanca.toFixed(2);
}