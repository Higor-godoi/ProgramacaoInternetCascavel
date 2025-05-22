// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // Pega os elementos do HTML
    const numPessoasInput = document.getElementById('numPessoas');
    const calcularBtn = document.getElementById('btnCalcularIngredientes');
    const resultadoDiv = document.getElementById('ingredientesResultado');

    // Constantes para os ingredientes por pessoa
    const OVOS_POR_PESSOA = 2;
    const QUEIJO_POR_PESSOA_G = 50;

    // Adiciona o "ouvinte" de clique ao botão
    calcularBtn.addEventListener('click', function() {
        const numPessoasString = numPessoasInput.value; // Pega o valor como texto

        // Validação 1: Campo vazio
        if (numPessoasString.trim() === '') {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, informe o número de pessoas.</p>';
            return;
        }

        // Converte para número inteiro
        const numPessoas = parseInt(numPessoasString, 10); 

        // Validação 2: Número válido e positivo
        if (isNaN(numPessoas) || numPessoas <= 0) {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira um número válido e positivo de pessoas.</p>';
            numPessoasInput.value = ""; // Limpa o campo se inválido
            return;
        }

        // Calcula os totais de ingredientes
        const totalOvos = numPessoas * OVOS_POR_PESSOA;
        const totalQueijo = numPessoas * QUEIJO_POR_PESSOA_G;

        // Ajusta o texto "pessoa" ou "pessoas"
        let pessoaTexto = "pessoa";
        if (numPessoas > 1) {
            pessoaTexto = "pessoas";
        }

        // Monta e exibe o resultado
        resultadoDiv.innerHTML = `
            <p>Para ${numPessoas} ${pessoaTexto}, você precisará de:</p>
            <ul>
                <li>${totalOvos} ovos</li>
                <li>${totalQueijo}g de queijo</li>
            </ul>
        `;
    });
}); 