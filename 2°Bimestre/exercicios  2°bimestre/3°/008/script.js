// Este é o arquivo exercicio8.js
// Ele contém o código JavaScript para calcular o valor total das vendas de camisetas.

function calcularVendaCamisetas() {
    // 1. Pegar os valores dos campos de input das quantidades no HTML.
    let inputQtdP = document.getElementById("qtdP");
    let inputQtdM = document.getElementById("qtdM");
    let inputQtdG = document.getElementById("qtdG");

    // Usamos parseInt() para garantir que as quantidades sejam tratadas como números inteiros.
    let qtdP = parseInt(inputQtdP.value);
    let qtdM = parseInt(inputQtdM.value);
    let qtdG = parseInt(inputQtdG.value);

    // Definir as constantes para os preços das camisetas.
    const precoP = 10.00;
    const precoM = 12.00;
    const precoG = 15.00;

    // 2. Validar a entrada do usuário.
    //    Verificamos se as quantidades são números válidos (isNaN)
    //    E se são não negativas.
    if (isNaN(qtdP) || qtdP < 0 || isNaN(qtdM) || qtdM < 0 || isNaN(qtdG) || qtdG < 0) {
        alert("Por favor, digite quantidades válidas e não negativas para as camisetas.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo (só acontece se a validação passar).
    //    Calcula a receita de cada tamanho e soma para obter o total.
    let totalArrecadado = (qtdP * precoP) + (qtdM * precoM) + (qtdG * precoG);

    // 4. Preparar a mensagem de saída.
    //    Usamos toFixed(2) para formatar o valor monetário com 2 casas decimais.
    let mensagem = `Total arrecadado com a venda: R$ ${totalArrecadado.toFixed(2)}`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}