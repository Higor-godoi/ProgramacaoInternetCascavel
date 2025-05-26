// Este é o arquivo exercicio6.js
// Ele contém o código JavaScript para calcular o valor a pagar no restaurante.

function calcularValorPagar() {
    // 1. Pegar o valor do campo de input do peso no HTML.
    let inputPesoPrato = document.getElementById("pesoPrato");

    // Usamos parseFloat() para garantir que o peso seja tratado como um número com decimais.
    let pesoPrato = parseFloat(inputPesoPrato.value);

    // Definir o preço fixo por quilo usando uma constante.
    const precoPorQuilo = 12.00;

    // 2. Validar a entrada do usuário.
    //    Verificamos se o peso NÃO é um número válido (isNaN)
    //    OU se o peso é negativo.
    if (isNaN(pesoPrato) || pesoPrato < 0) {
        alert("Por favor, digite um peso válido e não negativo.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo (só acontece se a validação passar).
    let valorTotal = pesoPrato * precoPorQuilo;

    // 4. Preparar a mensagem de saída.
    //    Usamos toFixed(2) para formatar o valor monetário com 2 casas decimais.
    //    Incluímos o R$ e a mensagem descritiva.
    let mensagem = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}