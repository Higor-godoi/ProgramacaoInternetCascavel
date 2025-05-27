document.addEventListener('DOMContentLoaded', function() {

    // Preços (constantes para fácil manutenção)
    const PRECO_POR_SABOR = 12.00;
    const PRECO_REFRIGERANTE = 7.00;

    // Pega os elementos do HTML
    const sabor1Input = document.getElementById('sabor1');
    const sabor2Input = document.getElementById('sabor2');
    const sabor3Input = document.getElementById('sabor3');
    const sabor4Input = document.getElementById('sabor4');
    const qtdRefrigerantesInput = document.getElementById('qtdRefrigerantes');
    const calcularBtn = document.getElementById('btnCalcularPedido');
    const resumoDiv = document.getElementById('resumoPedido');

    calcularBtn.addEventListener('click', function() {
        // Pega os valores dos inputs
        const sabor1 = sabor1Input.value.trim();
        const sabor2 = sabor2Input.value.trim();
        const sabor3 = sabor3Input.value.trim();
        const sabor4 = sabor4Input.value.trim();
        const qtdRefrigerantesString = qtdRefrigerantesInput.value;

        // Validação 1: Todos os sabores preenchidos?
        if (!sabor1 || !sabor2 || !sabor3 || !sabor4) {
            resumoDiv.innerHTML = '<p style="color: red;">Por favor, preencha todos os 4 sabores da pizza.</p>';
            return;
        }

        // Validação 2: Quantidade de refrigerantes válida?
        let qtdRefrigerantes = 0;
        if (qtdRefrigerantesString.trim() !== '') { // Permite campo vazio para 0 refrigerantes
            qtdRefrigerantes = parseInt(qtdRefrigerantesString, 10);
            if (isNaN(qtdRefrigerantes) || qtdRefrigerantes < 0) {
                resumoDiv.innerHTML = '<p style="color: red;">Por favor, insira uma quantidade válida de refrigerantes (0 ou mais).</p>';
                qtdRefrigerantesInput.value = "0"; // Sugere 0 se inválido
                return;
            }
        } else {
            // Se o campo estiver vazio, consideramos 0 refrigerantes e atualizamos o campo para clareza
            qtdRefrigerantesInput.value = "0";
        }

        // Cálculos
        const custoSabores = 4 * PRECO_POR_SABOR;
        const custoRefrigerantes = qtdRefrigerantes * PRECO_REFRIGERANTE;
        const valorTotal = custoSabores + custoRefrigerantes;

        // Monta e exibe o resumo do pedido
        resumoDiv.innerHTML = `
            <h3>Seu Pedido:</h3>
            <p><strong>Sabores da Pizza:</strong></p>
            <ul>
                <li>${sabor1}</li>
                <li>${sabor2}</li>
                <li>${sabor3}</li>
                <li>${sabor4}</li>
            </ul>
            <p><strong>Quantidade de Refrigerantes:</strong> ${qtdRefrigerantes}</p>
            <hr>
            <p><strong>Valor Total a Pagar: R$ ${valorTotal.toFixed(2)}</strong></p>
        `;
    });
}); 