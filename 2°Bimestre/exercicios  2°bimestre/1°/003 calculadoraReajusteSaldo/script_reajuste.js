// 1. Obter referências aos elementos HTML
const saldoInicialInput = document.getElementById('saldoInicial');
const calcularReajusteButton = document.getElementById('calcularReajuste');
const resultadoReajusteP = document.getElementById('resultadoReajuste');

// 2. Adicionar um "ouvinte de evento" para o clique no botão
calcularReajusteButton.addEventListener('click', function() {
    // 3. Obter o valor do campo de entrada
    const saldoInicial = parseFloat(saldoInicialInput.value);

    // 4. Validar o valor inserido
    if (isNaN(saldoInicial)) {
        resultadoReajusteP.textContent = 'Por favor, insira um valor numérico válido.';
        return; // Interrompe a execução
    }

    if (saldoInicial < 0) {
        resultadoReajusteP.textContent = 'O saldo inicial não pode ser negativo.';
        return; // Interrompe a execução
    }

    // 5. Calcular o reajuste de 1%
    // Reajuste de 1% é o mesmo que multiplicar por 1.01
    const saldoReajustado = saldoInicial * 1.01;

    // 6. Exibir o resultado
    resultadoReajusteP.textContent = 'Saldo com reajuste de 1%: R$ ' + saldoReajustado.toFixed(2);
}); 