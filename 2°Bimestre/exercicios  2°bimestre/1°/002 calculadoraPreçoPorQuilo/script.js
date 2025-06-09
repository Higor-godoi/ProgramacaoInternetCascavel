let preçoProdutoInput = document.getElementById("preçoProduto");
let quantidadeQuilosInput = document.getElementById("quantidadeQuilos");
let calcularPrecoButton = document.getElementById("CalcularPreço");
let resultadoP = document.getElementById("resultado");

calcularPrecoButton.addEventListener("click", function(){
    let preçoProduto = parseFloat(preçoProdutoInput.value);
    let quantidaDeQuilos = parseFloat(quantidadeQuilosInput.value);
    let resultado = (preçoProduto * quantidaDeQuilos);

    if(isNaN(preçoProduto) || isNaN(quantidaDeQuilos)){
        resultadoP.textContent = "por favor, selecionar um numero";

    }else if(preçoProduto === 0 || quantidaDeQuilos === 0){
        resultadoP.textContent = "adicionar um valor maior que zero";
    }else {
        resultadoP.textContent = "o preco final é R$:" + resultado;
    }

    

    

} );
