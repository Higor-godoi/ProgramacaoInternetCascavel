// 1. Obter referências aos elementos HTML
const numeroEntradaInput = document.getElementById('numeroEntrada');
const verificarParImparButton = document.getElementById('verificarParImpar');
const resultadoParImparP = document.getElementById('resultadoParImpar');

// 2. Adicionar um "ouvinte de evento" para o clique no botão
verificarParImparButton.addEventListener('click', function() {
    // 3. Obter o valor do campo de entrada
    // Usamos parseInt() para garantir que estamos trabalhando com um número inteiro.
    // O segundo argumento (radix) 10 especifica que o número está no sistema decimal.
    const numero = parseInt(numeroEntradaInput.value, 10);

    // 4. Validar o valor inserido
    if (isNaN(numero)) {
        resultadoParImparP.textContent = 'Erro: Por favor, insira um número válido.';
        return; // Interrompe a execução
    }

    // 5. Verificar se o número é par ou ímpar usando o operador módulo (%)
    let mensagem = '';
    if (numero % 2 === 0) {
        mensagem = `O número ${numero} é PAR.`;
    } else {
        mensagem = `O número ${numero} é ÍMPAR.`;
    }

    // 6. Exibir o resultado
    resultadoParImparP.textContent = mensagem;
}); 