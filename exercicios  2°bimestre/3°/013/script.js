// Este é o arquivo exercicio13.js
// Ele contém o código JavaScript para calcular a área de uma pizza.

function calcularAreaPizza() {
    // 1. Pegar o valor do campo de input do raio no HTML.
    let inputRaio = document.getElementById("raio");

    // Usamos parseFloat() para garantir que o raio seja tratado como um número com decimais.
    let raio = parseFloat(inputRaio.value);

    // Definir a constante para Pi, conforme especificado no exercício.
    const pi = 3.14;

    // 2. Validar a entrada do usuário.
    //    Verificamos se a entrada é um número válido (isNaN) e não negativo (raio não pode ser negativo).
    if (isNaN(raio) || raio < 0) {
        alert("Por favor, digite um valor válido e não negativo para o raio.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo da área (só acontece se a validação passar).
    //    Calcula o raio ao quadrado (raio * raio).
    let raioQuadrado = Math.pow(raio, 2); // ou raio * raio

    //    Calcula a área: pi * raio ao quadrado.
    let area = pi * raioQuadrado;

    // 4. Preparar a mensagem de saída.
    //    Usamos toFixed(2) para formatar a área com 2 casas decimais, comum para áreas ou resultados finais.
    let mensagem = `A área da pizza é: ${area.toFixed(2)}`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}