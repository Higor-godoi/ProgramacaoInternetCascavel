// Este é o arquivo exercicio12.js
// Ele contém o código JavaScript para desmembrar um número de até 3 dígitos em centena, dezena e unidade.

function desmembrarNumero() {
    // 1. Pegar o valor do campo de input do número inteiro no HTML.
    let inputNumero = document.getElementById("numeroInteiro");

    // Usamos parseInt() para garantir que o valor seja tratado como um número inteiro.
    let numero = parseInt(inputNumero.value);

    // 2. Validar a entrada do usuário.
    //    Verificamos se a entrada é um número válido (isNaN)
    //    E se está dentro do intervalo permitido (0 a 999).
    //    A validação de min/max no input HTML já ajuda, mas é bom validar no JS também.
    const limiteMaximo = 999;
    const limiteMinimo = 0;

    if (isNaN(numero) || numero < limiteMinimo || numero > limiteMaximo) {
        alert(`Por favor, digite um número inteiro válido entre ${limiteMinimo} e ${limiteMaximo}.`);
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o desmembramento (só acontece se a validação passar).
    //    Encontra a centena (parte inteira da divisão por 100).
    let centena = Math.floor(numero / 100);

    //    Encontra o restante após remover a centena.
    let restanteAposCentena = numero % 100;

    //    Encontra a dezena (parte inteira da divisão do restante por 10).
    let dezena = Math.floor(restanteAposCentena / 10);

    //    Encontra a unidade (resto da divisão do restante por 10).
    let unidade = restanteAposCentena % 10;

    // 4. Preparar a mensagem de saída no formato solicitado.
    let mensagem = `CENTENA = ${centena} DEZENA = ${dezena} UNIDADE = ${unidade}`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}