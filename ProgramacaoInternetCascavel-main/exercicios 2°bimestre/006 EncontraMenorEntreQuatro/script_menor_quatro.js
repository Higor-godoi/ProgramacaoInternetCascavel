// 1. Obter referências aos elementos HTML
const valorAInput = document.getElementById('valorA');
const valorBInput = document.getElementById('valorB');
const valorCInput = document.getElementById('valorC');
const valorDInput = document.getElementById('valorD');
const encontrarMenorButton = document.getElementById('encontrarMenor');
const resultadoMenorP = document.getElementById('resultadoMenor');

// 2. Adicionar um "ouvinte de evento" para o clique no botão
encontrarMenorButton.addEventListener('click', function() {
    // 3. Obter os valores dos campos de entrada
    const vA = parseFloat(valorAInput.value);
    const vB = parseFloat(valorBInput.value);
    const vC = parseFloat(valorCInput.value);
    const vD = parseFloat(valorDInput.value);

    // 4. Validar os valores inseridos
    if (isNaN(vA) || isNaN(vB) || isNaN(vC) || isNaN(vD)) {
        resultadoMenorP.textContent = 'Erro: Por favor, insira números válidos em todos os quatro campos.';
        return; // Interrompe a execução
    }

    // 5. Encontrar o menor valor usando Math.min()
    const menorValor = Math.min(vA, vB, vC, vD);

    // 6. Exibir o resultado
    resultadoMenorP.textContent = `O menor valor entre ${vA}, ${vB}, ${vC} e ${vD} é: ${menorValor}.`;
}); 