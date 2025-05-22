// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // Pega os elementos do HTML que vamos usar
    const cotacaoInput = document.getElementById('cotacaoDolar');
    const calcularBtn = document.getElementById('btnCalcular');
    const resultadosDiv = document.getElementById('resultados');

    // Adiciona um "ouvinte" para o evento de clique no botão
    calcularBtn.addEventListener('click', function() {
        
        const cotacaoBaseString = cotacaoInput.value; // Pega o valor do input (texto)

        // Validação 1: Verifica se algo foi digitado
        if (cotacaoBaseString.trim() === '') {
            resultadosDiv.innerHTML = '<p style="color: red;">Por favor, insira um valor.</p>';
            return; // Para a execução da função aqui
        }

        // Converte o valor para número (pode ter casas decimais)
        const cotacaoBase = parseFloat(cotacaoBaseString);

        // Validação 2: Verifica se é um número válido e positivo
        if (isNaN(cotacaoBase) || cotacaoBase <= 0) {
            resultadosDiv.innerHTML = '<p style="color: red;">Por favor, insira um número válido e positivo.</p>';
            cotacaoInput.value = ""; // Limpa o campo de entrada se o valor for inválido
            return; // Para a execução
        }

        // Calcula as porcentagens de aumento
        const aumento1 = cotacaoBase * 1.01; // +1%
        const aumento2 = cotacaoBase * 1.02; // +2%
        const aumento5 = cotacaoBase * 1.05; // +5%
        const aumento10 = cotacaoBase * 1.10; // +10%

        // Monta o HTML para mostrar os resultados
        // .toFixed(2) formata o número para ter 2 casas decimais (bom para dinheiro)
        resultadosDiv.innerHTML = `
            <p>Cotação Base: R$ ${cotacaoBase.toFixed(2)}</p>
            <p>Com +1%: R$ ${aumento1.toFixed(2)}</p>
            <p>Com +2%: R$ ${aumento2.toFixed(2)}</p>
            <p>Com +5%: R$ ${aumento5.toFixed(2)}</p>
            <p>Com +10%: R$ ${aumento10.toFixed(2)}</p>
        `;
    });
}); 