// Este é o arquivo exercicio9.js
// Ele contém o código JavaScript para calcular a distância entre dois pontos.

function calcularDistancia() {
    // 1. Pegar os valores das coordenadas dos campos de input no HTML.
    let inputX1 = document.getElementById("x1");
    let inputY1 = document.getElementById("y1");
    let inputX2 = document.getElementById("x2");
    let inputY2 = document.getElementById("y2");

    // Usamos parseFloat() para garantir que as coordenadas sejam tratadas como números com decimais.
    let x1 = parseFloat(inputX1.value);
    let y1 = parseFloat(inputY1.value);
    let x2 = parseFloat(inputX2.value);
    let y2 = parseFloat(inputY2.value);

    // 2. Validar a entrada do usuário.
    //    Verificamos se todas as 4 entradas são números válidos.
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        alert("Por favor, digite valores numéricos válidos para todas as coordenadas.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo da distância (só acontece se a validação passar).
    //    Calcula a diferença entre as coordenadas x (delta_x) e y (delta_y).
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    //    Calcula o quadrado das diferenças.
    let deltaXQuadrado = Math.pow(deltaX, 2); // ou deltaX * deltaX
    let deltaYQuadrado = Math.pow(deltaY, 2); // ou deltaY * deltaY

    //    Soma os quadrados das diferenças.
    let somaDosQuadrados = deltaXQuadrado + deltaYQuadrado;

    //    Calcula a raiz quadrada da soma para obter a distância.
    let distancia = Math.sqrt(somaDosQuadrados);

    // 4. Preparar a mensagem de saída.
    //    Usamos toFixed(4) para formatar a distância com uma precisão razoável (4 casas decimais).
    let mensagem = `A distância entre os pontos é: ${distancia.toFixed(4)}`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}