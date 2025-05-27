// 1. Obter referências aos elementos HTML
const valorQuiloInput = document.getElementById('valorQuilo');
const quantidadeQuilosInput = document.getElementById('quantidadeQuilos');
const calcularPrecoFinalButton = document.getElementById('calcularPrecoFinal');
const resultadoPrecoFinalP = document.getElementById('resultadoPrecoFinal');

// 2. Adicionar um "ouvinte de evento" para o clique no botão
calcularPrecoFinalButton.addEventListener('click', function() {
    // 3. Obter os valores dos campos de entrada
    const valorQuilo = parseFloat(valorQuiloInput.value);
    const quantidadeQuilos = parseFloat(quantidadeQuilosInput.value);

    // 4. Realizar o cálculo do valor final
    // Verifica se os valores são números válidos e positivos
    if (isNaN(valorQuilo) || isNaN(quantidadeQuilos)) {
        resultadoPrecoFinalP.textContent = 'Por favor, insira valores numéricos válidos em ambos os campos.';
        return; // Interrompe a execução da função aqui
    }

    if (valorQuilo <= 0 || quantidadeQuilos <= 0) {
        resultadoPrecoFinalP.textContent = 'Os valores devem ser maiores que zero.';
        return; // Interrompe a execução da função aqui
    }

    const precoFinal = valorQuilo * quantidadeQuilos;

    // 5. Exibir o resultado
    resultadoPrecoFinalP.textContent = 'O valor final a ser pago é: R$ ' + precoFinal.toFixed(2);
}); 