document.addEventListener('DOMContentLoaded', function() {
    const qtdCavalosInput = document.getElementById('qtdCavalos');
    const calcularBtn = document.getElementById('btnCalcularFerraduras');
    const resultadoDiv = document.getElementById('resultadoFerraduras');

    const FERRADURAS_POR_CAVALO = 4;

    calcularBtn.addEventListener('click', function() {
        const qtdCavalosString = qtdCavalosInput.value;

        // Validação 1: Campo vazio
        if (qtdCavalosString.trim() === '') {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, informe a quantidade de cavalos.</p>';
            return;
        }

        // Converte para número inteiro
        const qtdCavalos = parseInt(qtdCavalosString, 10);

        // Validação 2: Número inteiro válido e não negativo
        if (isNaN(qtdCavalos) || !Number.isInteger(qtdCavalos) || qtdCavalos < 0) {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira uma quantidade válida de cavalos (número inteiro, 0 ou mais).</p>';
            qtdCavalosInput.value = ""; // Limpa se inválido
            return;
        }

        // Cálculo de ferraduras
        const totalFerraduras = qtdCavalos * FERRADURAS_POR_CAVALO;

        // Exibe o resultado
        let cavaloTexto = qtdCavalos === 1 ? "cavalo" : "cavalos";
        resultadoDiv.innerHTML = `<p>Para ${qtdCavalos} ${cavaloTexto}, são necessárias <strong>${totalFerraduras} ferraduras</strong>.</p>`;
    });
}); 