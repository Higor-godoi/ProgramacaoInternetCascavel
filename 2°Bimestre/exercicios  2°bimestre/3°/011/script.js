// Este é o arquivo exercicio11.js
// Ele contém o código JavaScript para calcular salários com aumento e imposto.

function calcularSalarios() {
    // 1. Pegar o valor do campo de input do salário inicial no HTML.
    let inputSalarioInicial = document.getElementById("salarioInicial");

    // Usamos parseFloat() para garantir que o valor seja tratado como um número com decimais.
    let salarioInicial = parseFloat(inputSalarioInicial.value);

    // Definir as constantes para as taxas de aumento e imposto.
    const taxaAumento = 0.15; // 15%
    const taxaImposto = 0.08; // 8%

    // 2. Validar a entrada do usuário.
    //    Verificamos se a entrada é um número válido (isNaN) e não negativo.
    if (isNaN(salarioInicial) || salarioInicial < 0) {
        alert("Por favor, digite um valor válido e não negativo para o salário inicial.");
        // Limpa os campos de resultado se a entrada for inválida
        document.getElementById("salarioInicialOutput").textContent = "R$ 0.00";
        document.getElementById("salarioAumentoOutput").textContent = "R$ 0.00";
        document.getElementById("salarioFinalOutput").textContent = "R$ 0.00";
        return; // Para a execução da função
    }

    // 3. Realizar os cálculos (só acontece se a validação passar).
    //    Calcula o salário com aumento de 15%.
    let salarioComAumento = salarioInicial * (1 + taxaAumento); // ou salarioInicial * 1.15

    //    Calcula o salário final após descontar 8% de imposto SOBRE o salário com aumento.
    let salarioFinal = salarioComAumento * (1 - taxaImposto); // ou salarioComAumento * 0.92

    // 4. Exibir os resultados na página HTML.
    //    Pegamos os elementos onde os resultados serão exibidos pelos seus IDs.
    let spanSalarioInicial = document.getElementById("salarioInicialOutput");
    let spanSalarioAumento = document.getElementById("salarioAumentoOutput");
    let spanSalarioFinal = document.getElementById("salarioFinalOutput");

    //    Atualizamos o texto de cada elemento, formatando os valores como moeda.
    spanSalarioInicial.textContent = `R$ ${salarioInicial.toFixed(2)}`;
    spanSalarioAumento.textContent = `R$ ${salarioComAumento.toFixed(2)}`;
    spanSalarioFinal.textContent = `R$ ${salarioFinal.toFixed(2)}`;
}