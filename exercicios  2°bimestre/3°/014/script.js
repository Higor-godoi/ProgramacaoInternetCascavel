// Este é o arquivo exercicio14.js
// Ele contém o código JavaScript para rachar a conta do bar com a regra especial.

function racharConta() {
    // 1. Pegar o valor total da conta do campo de input no HTML.
    let inputTotalConta = document.getElementById("totalConta");

    // Usamos parseFloat() para garantir que o valor seja tratado como um número com decimais.
    let totalConta = parseFloat(inputTotalConta.value);

    // 2. Validar a entrada do usuário.
    //    Verificamos se a entrada é um número válido (isNaN) e não negativo.
    if (isNaN(totalConta) || totalConta < 0) {
        alert("Por favor, digite um valor válido e não negativo para a conta total.");
        // Limpa os campos de resultado se a entrada for inválida
        document.getElementById("pagamentoCarlosOutput").textContent = "R$ 0.00";
        document.getElementById("pagamentoAndreOutput").textContent = "R$ 0.00";
        document.getElementById("pagamentoFelipeOutput").textContent = "R$ 0.00";
        return; // Para a execução da função
    }

    // 3. Realizar os cálculos (só acontece se a validação passar).
    //    Calcula o valor por pessoa se a divisão fosse totalmente igual.
    let valorPorPessoaIgual = totalConta / 3;

    //    Carlos e André pagam apenas a parte INTEIRA do valor por pessoa.
    let pagamentoCarlosAndre = Math.floor(valorPorPessoaIgual);

    //    Calcula o total pago por Carlos e André juntos.
    let totalPagoCarlosAndre = pagamentoCarlosAndre * 2;

    //    Felipe paga o restante.
    let pagamentoFelipe = totalConta - totalPagoCarlosAndre;

    // 4. Exibir os resultados na página HTML.
    //    Pegamos os elementos onde os resultados serão exibidos pelos seus IDs.
    let spanPagamentoCarlos = document.getElementById("pagamentoCarlosOutput");
    let spanPagamentoAndre = document.getElementById("pagamentoAndreOutput");
    let spanPagamentoFelipe = document.getElementById("pagamentoFelipeOutput");

    //    Atualizamos o texto de cada elemento, formatando os valores como moeda.
    //    Carlos e André pagam com .00, Felipe paga com as casas decimais corretas.
    spanPagamentoCarlos.textContent = `R$ ${pagamentoCarlosAndre.toFixed(2)}`;
    spanPagamentoAndre.textContent = `R$ ${pagamentoCarlosAndre.toFixed(2)}`; // É o mesmo valor que Carlos
    spanPagamentoFelipe.textContent = `R$ ${pagamentoFelipe.toFixed(2)}`;
}