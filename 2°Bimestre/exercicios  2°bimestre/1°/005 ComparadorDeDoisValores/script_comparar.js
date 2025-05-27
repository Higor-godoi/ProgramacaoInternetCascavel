// 1. Obter referências aos elementos HTML
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const verificarMaiorButton = document.getElementById('verificarMaior');
const resultadoComparacaoP = document.getElementById('resultadoComparacao');

// 2. Adicionar um "ouvinte de evento" para o clique no botão
verificarMaiorButton.addEventListener('click', function() {
    // 3. Obter os valores dos campos de entrada
    const v1 = parseFloat(valor1Input.value);
    const v2 = parseFloat(valor2Input.value);

    // 4. Validar os valores inseridos
    if (isNaN(v1) || isNaN(v2)) {
        resultadoComparacaoP.textContent = 'Erro: Por favor, insira números válidos em ambos os campos.';
        return; // Interrompe a execução
    }

    // 5. Comparar os valores e definir a mensagem de resultado
    let mensagemResultado = ''; // Variável para armazenar a mensagem

    if (v1 > v2) {
        mensagemResultado = `O primeiro valor (${v1}) é MAIOR que o segundo valor (${v2}).`;
    } else if (v2 > v1) {
        mensagemResultado = `O segundo valor (${v2}) é MAIOR que o primeiro valor (${v1}).`;
    } else { // Se não é maior nem menor, só pode ser igual
        mensagemResultado = `Os dois valores são IGUAIS (${v1}).`;
    }

    // 6. Exibir o resultado
    resultadoComparacaoP.textContent = mensagemResultado;
}); 