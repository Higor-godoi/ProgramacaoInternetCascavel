// 1. Obter referências aos elementos HTML
const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const numero3Input = document.getElementById('numero3');
const calcularTudoButton = document.getElementById('calcularTudo');

const resultadoMAP = document.getElementById('resultadoMA');
const resultadoMPP = document.getElementById('resultadoMP');
const resultadoSomaMediasP = document.getElementById('resultadoSomaMedias');
const resultadoMediaDasMediasP = document.getElementById('resultadoMediaDasMedias');

// Pesos para a média ponderada
const peso1 = 3;
const peso2 = 2;
const peso3 = 5;
const somaPesos = peso1 + peso2 + peso3; // 10

// 2. Adicionar um "ouvinte de evento" para o clique no botão
calcularTudoButton.addEventListener('click', function() {
    // 3. Obter os valores dos campos de entrada
    const n1 = parseFloat(numero1Input.value);
    const n2 = parseFloat(numero2Input.value);
    const n3 = parseFloat(numero3Input.value);

    // 4. Validar os valores inseridos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        // Limpa resultados anteriores e mostra erro
        resultadoMAP.textContent = 'Erro: Por favor, insira números válidos em todos os campos.';
        resultadoMPP.textContent = '';
        resultadoSomaMediasP.textContent = '';
        resultadoMediaDasMediasP.textContent = '';
        return; // Interrompe a execução
    }

    // 5. Calcular a Média Aritmética (MA)
    const mediaAritmetica = (n1 + n2 + n3) / 3;

    // 6. Calcular a Média Ponderada (MP)
    const mediaPonderada = (n1 * peso1 + n2 * peso2 + n3 * peso3) / somaPesos;

    // 7. Calcular a Soma das Duas Médias
    const somaDasMedias = mediaAritmetica + mediaPonderada;

    // 8. Calcular a Média das Médias
    const mediaDasMedias = (mediaAritmetica + mediaPonderada) / 2; // ou somaDasMedias / 2

    // 9. Exibir os resultados
    resultadoMAP.textContent = `Média Aritmética: ${mediaAritmetica.toFixed(2)}`;
    resultadoMPP.textContent = `Média Ponderada (Pesos: ${peso1},${peso2},${peso3}): ${mediaPonderada.toFixed(2)}`;
    resultadoSomaMediasP.textContent = `Soma das Médias: ${somaDasMedias.toFixed(2)}`;
    resultadoMediaDasMediasP.textContent = `Média das Médias: ${mediaDasMedias.toFixed(2)}`;
}); 