document.addEventListener('DOMContentLoaded', function() {
    const larguraInput = document.getElementById('largura');
    const comprimentoInput = document.getElementById('comprimento');
    const calcularBtn = document.getElementById('btnCalcularArea');
    const resultadoDiv = document.getElementById('resultadoArea');

    calcularBtn.addEventListener('click', function() {
        const larguraString = larguraInput.value;
        const comprimentoString = comprimentoInput.value;

        // Validação 1: Campos vazios
        if (larguraString.trim() === '' || comprimentoString.trim() === '') {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, preencha as duas dimensões.</p>';
            return;
        }

        // Converte para números (podem ser decimais)
        const largura = parseFloat(larguraString);
        const comprimento = parseFloat(comprimentoString);

        // Validação 2: Números válidos e positivos
        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira dimensões válidas e positivas.</p>';
            // Opcional: limpar campos se inválidos
            // larguraInput.value = '';
            // comprimentoInput.value = '';
            return;
        }

        // Cálculo da área
        const area = largura * comprimento;

        // Exibe o resultado
        resultadoDiv.innerHTML = `<p>A área do terreno é: <strong>${area.toFixed(2)} metros quadrados</strong>.</p>`;
    });
}); 