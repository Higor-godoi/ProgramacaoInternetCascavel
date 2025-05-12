// 1. Obter referências aos elementos HTML
const valorPagoInput = document.getElementById('valorPago');
const precoProdutoInput = document.getElementById('precoProduto');
const calcularTrocoButton = document.getElementById('calcularTroco');
const resultadoTrocoP = document.getElementById('resultadoTroco');

// 2. Adicionar um "ouvinte de evento" para o clique no botão
calcularTrocoButton.addEventListener('click', function() {
    // 3. Obter os valores dos campos de entrada
    // O .value pega o texto digitado no campo.
    // parseFloat() converte o texto para um número com casas decimais.
    const valorPago = parseFloat(valorPagoInput.value);
    const precoProduto = parseFloat(precoProdutoInput.value);

    // 4. Realizar o cálculo do troco
    const troco = valorPago - precoProduto;

    // 5. Exibir o resultado
    // Usamos .textContent para definir o texto dentro do parágrafo <p>
    // O método .toFixed(2) formata o número para ter sempre duas casas decimais (bom para dinheiro)
    if (isNaN(troco)) { // Verifica se o resultado não é um número (NaN - Not a Number)
        resultadoTrocoP.textContent = 'Por favor, insira valores numéricos válidos.';
    } else if (troco < 0) {
        resultadoTrocoP.textContent = 'O valor pago é insuficiente.';
    } else {
        resultadoTrocoP.textContent = 'O troco é: R$ ' + troco.toFixed(2);
    }
}); 