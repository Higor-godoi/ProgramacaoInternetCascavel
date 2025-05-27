// Espera o HTML carregar
document.addEventListener('DOMContentLoaded', function() {

    // Pega os elementos
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const calcularBtn = document.getElementById('btnCalcularOperacoes');
    const resultadosDiv = document.getElementById('areaResultados');

    calcularBtn.addEventListener('click', function() {
        const num1String = numero1Input.value;
        const num2String = numero2Input.value;

        // Validação 1: Campos vazios
        if (num1String.trim() === '' || num2String.trim() === '') {
            resultadosDiv.innerHTML = '<p style="color: red;">Por favor, preencha os dois números.</p>';
            return;
        }

        // Converte para números inteiros
        const num1 = parseInt(num1String, 10);
        const num2 = parseInt(num2String, 10);

        // Validação 2: Se são números inteiros válidos
        // Number.isInteger() é uma boa forma de verificar se o resultado do parseInt é realmente um inteiro
        // (parseInt pode retornar NaN ou até mesmo um número se a string começar com dígitos válidos e terminar com lixo)
        if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
            resultadosDiv.innerHTML = '<p style="color: red;">Por favor, insira números inteiros válidos.</p>';
            // Opcional: limpar campos se inválidos
            // numero1Input.value = ""; 
            // numero2Input.value = "";
            return;
        }

        // Cálculos
        const soma = num1 + num2;
        const subtracao = num1 - num2;
        const multiplicacao = num1 * num2;
        
        let divisaoResultado;
        if (num2 === 0) {
            divisaoResultado = "Não é possível dividir por zero";
        } else {
            divisaoResultado = (num1 / num2).toFixed(2); // .toFixed(2) para caso a divisão não seja exata
        }

        // Monta e exibe os resultados
        resultadosDiv.innerHTML = `
            <p>Soma: ${num1} + ${num2} = <strong>${soma}</strong></p>
            <p>Subtração: ${num1} - ${num2} = <strong>${subtracao}</strong></p>
            <p>Multiplicação: ${num1} * ${num2} = <strong>${multiplicacao}</strong></p>
            <p>Divisão: ${num1} / ${num2} = <strong>${divisaoResultado}</strong></p>
        `;
    });
}); 