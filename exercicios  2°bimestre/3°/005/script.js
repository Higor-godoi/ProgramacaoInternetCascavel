// Este é o arquivo exercicio5.js
// Ele contém o código JavaScript para calcular a quantidade de litros de gasolina.

function calcularLitros() {
    // 1. Pegar os valores dos campos de input no HTML.
    let inputPrecoLitro = document.getElementById("precoLitro");
    let inputValorPago = document.getElementById("valorPago");

    // Usamos parseFloat() para garantir que os valores sejam tratados como números com decimais.
    let precoLitro = parseFloat(inputPrecoLitro.value);
    let valorPago = parseFloat(inputValorPago.value);

    // 2. Validar a entrada do usuário.
    //    Verificamos se algum dos valores NÃO é um número válido (isNaN)
    //    OU se algum dos valores é negativo.
    //    IMPORTANTE: Também verificamos se o preço do litro é ZERO.
    //    Não podemos dividir por zero, pois causaria um erro no JavaScript.
    if (isNaN(precoLitro) || precoLitro <= 0 || isNaN(valorPago) || valorPago < 0) {
        alert("Por favor, digite valores válidos e positivos para o preço do litro e o valor pago.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo (só acontece se a validação passar).
    let quantidadeLitros = valorPago / precoLitro;

    // 4. Preparar a mensagem de saída.
    //    Usamos toFixed(3) para mostrar 3 casas decimais para a quantidade de litros.
    let mensagem = `Com R$ ${valorPago.toFixed(2)} e o litro a R$ ${precoLitro.toFixed(2)}, você colocou ${quantidadeLitros.toFixed(3)} litros.`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}