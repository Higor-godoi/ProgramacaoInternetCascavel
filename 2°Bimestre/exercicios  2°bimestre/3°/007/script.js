// Este é o arquivo exercicio7.js
// Ele contém o código JavaScript para calcular os dias passados no ano.

function calcularDiasPassados() {
    // 1. Pegar os valores dos campos de input do dia e mês no HTML.
    let inputDia = document.getElementById("dia");
    let inputMes = document.getElementById("mes");

    // Usamos parseInt() para garantir que os valores sejam tratados como números inteiros.
    let dia = parseInt(inputDia.value);
    let mes = parseInt(inputMes.value);

    // Definir a constante para o número de dias por mês.
    const diasPorMes = 30;
    const totalMesesNoAno = 12;
    const diasNoAnoSimplificado = diasPorMes * totalMesesNoAno; // 360 dias em um ano simplificado

    // 2. Validar a entrada do usuário.
    //    Verificamos se dia e mês são números válidos (isNaN)
    //    Se dia está dentro do intervalo (1 a 30)
    //    Se mês está dentro do intervalo (1 a 12)
    if (isNaN(dia) || dia < 1 || dia > diasPorMes || isNaN(mes) || mes < 1 || mes > totalMesesNoAno) {
        alert(`Por favor, digite um dia entre 1 e ${diasPorMes} e um mês entre 1 e ${totalMesesNoAno}.`);
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo (só acontece se a validação passar).
    //    Calculamos os dias nos meses ANTERIORES ao mês informado.
    let diasMesesAnteriores = (mes - 1) * diasPorMes;

    //    O total de dias passados é a soma dos dias dos meses anteriores
    //    com os dias informados no mês atual.
    let totalDiasPassados = diasMesesAnteriores + dia;

    // 4. Preparar a mensagem de saída.
    let mensagem = `Desde o início do ano até o dia ${dia}/${mes}, passaram-se ${totalDiasPassados} dias.`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}