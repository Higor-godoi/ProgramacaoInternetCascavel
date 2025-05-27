// Este é o arquivo exercicio10.js
// Ele contém o código JavaScript para converter total de dias em anos, meses e dias.

function converterDias() {
    // 1. Pegar o valor do campo de input do total de dias no HTML.
    let inputTotalDias = document.getElementById("totalDias");

    // Usamos parseInt() para garantir que o valor seja tratado como um número inteiro.
    let totalDias = parseInt(inputTotalDias.value);

    // Definir as constantes para a conversão, conforme as regras do exercício.
    const diasPorMes = 30;
    const mesesPorAno = 12;
    const diasPorAno = diasPorMes * mesesPorAno; // 360 dias por ano (simplificado)

    // 2. Validar a entrada do usuário.
    //    Verificamos se a entrada é um número válido (isNaN) e não negativo.
    if (isNaN(totalDias) || totalDias < 0) {
        alert("Por favor, digite um número válido e não negativo para o total de dias.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar a conversão (só acontece se a validação passar).
    //    Calcula o número de anos completos.
    let anos = Math.floor(totalDias / diasPorAno); // Math.floor garante a parte inteira

    //    Calcula os dias restantes após remover os anos completos.
    let diasRestantesAposAnos = totalDias % diasPorAno;

    //    Calcula o número de meses completos a partir dos dias restantes.
    let meses = Math.floor(diasRestantesAposAnos / diasPorMes);

    //    Calcula os dias finais restantes após remover os meses completos.
    let diasFinais = diasRestantesAposAnos % diasPorMes;

    // 4. Preparar a mensagem de saída.
    let mensagem = `${totalDias} dias correspondem a: ${anos} anos, ${meses} meses e ${diasFinais} dias.`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}