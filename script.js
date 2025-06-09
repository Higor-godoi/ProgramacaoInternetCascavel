function verificarTriangulo() {
    const ladoX = parseFloat(document.getElementById('ladoX').value);
    const ladoY = parseFloat(document.getElementById('ladoY').value);
    const ladoZ = parseFloat(document.getElementById('ladoZ').value);
    const displayResultado = document.getElementById('resultadoTriangulo');

    if (!ladoX || !ladoY || !ladoZ) {
        displayResultado.innerText = "Por favor, digite os três valores.";
        return;
    }

    const ehTriangulo = (ladoX < ladoY + ladoZ) && (ladoY < ladoX + ladoZ) && (ladoZ < ladoX + ladoY);

    if (ehTriangulo) {
        if (ladoX === ladoY && ladoY === ladoZ) {
            displayResultado.innerText = "É um triângulo Equilátero.";
        } else if (ladoX === ladoY || ladoY === ladoZ || ladoX === ladoZ) {
            displayResultado.innerText = "É um triângulo Isósceles.";
        } else {
            displayResultado.innerText = "É um triângulo Escaleno.";
        }
    } else {
        displayResultado.innerText = "Esses valores não formam um triângulo.";
    }
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoEl = document.getElementById('resultadoIMC');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoEl.innerText = "Valores inválidos. Preencha o peso e a altura corretamente.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    resultadoEl.innerText = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`;
}

function calcularImposto() {
    const ano = parseInt(document.getElementById('anoVeiculo').value);
    const valorTabela = parseFloat(document.getElementById('valorVeiculo').value);
    const campoResultado = document.getElementById('resultadoImposto');

    if (!ano || !valorTabela) {
        campoResultado.innerText = "Ano e valor são obrigatórios.";
        return;
    }

    let taxa;
    if (ano < 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    const imposto = valorTabela * taxa;
    const impostoFormatado = imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    campoResultado.innerText = `O valor do imposto é de ${impostoFormatado}.`;
}

function calcularAumento() {
    const salario = parseFloat(document.getElementById('salarioAtual').value);
    const codigoCargo = document.getElementById('codigoCargo').value;
    const pResultado = document.getElementById('resultadoAumento');

    if (isNaN(salario) || salario <= 0 || !codigoCargo) {
        pResultado.innerText = "Por favor, insira o salário e o código do cargo.";
        return;
    }

    let percentual;
    // O switch é bom aqui, então vamos manter, mas com pequenas variações.
    switch (parseInt(codigoCargo)) {
        case 101: percentual = 0.10; break;
        case 102: percentual = 0.20; break;
        case 103: percentual = 0.30; break;
        default:  percentual = 0.40; break;
    }

    const aumento = salario * percentual;
    const novoSalario = salario + aumento;

    // Formatação de moeda "na mão", sem função auxiliar
    const salAntigoF = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const aumentoF = aumento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const novoSalF = novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    pResultado.innerHTML = `Salário antigo: ${salAntigoF}<br>Aumento: ${aumentoF}<br>Novo Salário: ${novoSalF}`;
}

function calcularCredito() {
    const saldo = parseFloat(document.getElementById('saldoMedio').value);
    const elResultado = document.getElementById('resultadoCredito');

    if (isNaN(saldo) || saldo < 0) {
        elResultado.innerText = "Insira um saldo médio válido.";
        return;
    }

    let percCredito;
    if (saldo <= 200) {
        percCredito = 0;
    } else if (saldo <= 400) {
        percCredito = 0.20;
    } else if (saldo <= 600) {
        percCredito = 0.30;
    } else {
        percCredito = 0.40;
    }

    const valorCredito = saldo * percCredito;
    const saldoF = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const creditoF = valorCredito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (valorCredito > 0) {
        elResultado.innerText = `Para um saldo de ${saldoF}, você tem direito a um crédito de ${creditoF}.`;
    } else {
        elResultado.innerText = `Para um saldo de ${saldoF}, não há crédito disponível.`;
    }
}

function calcularLanche() {
    const codigo = parseInt(document.getElementById('codigoProduto').value);
    const qtd = parseInt(document.getElementById('quantidade').value);
    const resultadoLanche = document.getElementById('resultadoLanche');

    if (!codigo || !qtd || qtd <= 0) {
        resultadoLanche.innerText = "Código do produto e quantidade são necessários.";
        return;
    }
    
    let preco = 0;
    let produto = "";

    if (codigo === 100) {
        preco = 11.00;
        produto = "Cachorro Quente";
    } else if (codigo === 200) {
        preco = 8.50;
        produto = "Bauru";
    } else if (codigo === 300) {
        preco = 8.00;
        produto = "Misto Quente";
    } else if (codigo === 400) {
        preco = 9.00;
        produto = "Hamburger";
    } else if (codigo === 500) {
        preco = 10.00;
        produto = "Cheeseburger";
    } else if (codigo === 600) {
        preco = 4.50;
        produto = "Refrigerante";
    } else {
        resultadoLanche.innerText = "Esse código de produto não existe.";
        return;
    }
    
    const total = preco * qtd;
    const totalF = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    resultadoLanche.innerText = `Total do pedido: ${qtd}x ${produto} = ${totalF}`;
}

function calcularPagamento() {
    const preco = parseFloat(document.getElementById('precoEtiqueta').value);
    const cond = document.getElementById('condicaoPagamento').value;
    const res = document.getElementById('resultadoPagamento');

    if (isNaN(preco) || preco <= 0) {
        res.innerText = "O preço deve ser um número positivo.";
        return;
    }
    
    let precoFinal;
    let msg;

    if (cond === 'a') {
        precoFinal = preco * 0.9;
        msg = `Pagamento à vista tem 10% de desconto. Total: ${precoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else if (cond === 'b') {
        precoFinal = preco * 0.85;
        msg = `Pagamento no crédito à vista tem 15% de desconto. Total: ${precoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else if (cond === 'c') {
        precoFinal = preco;
        const parc = (precoFinal / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        msg = `Preço normal. Em 2x de ${parc}.`;
    } else if (cond === 'd') {
        precoFinal = preco * 1.10;
        const parc = (precoFinal / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        msg = `Preço com 10% de juros. Ex: 3x de ${parc}.`;
    }
    
    res.innerHTML = msg;
}

function calcularSalarioProfessor() {
    const nivel = document.getElementById('nivelProfessor').value;
    const horas = parseFloat(document.getElementById('horasAula').value);
    const resSalario = document.getElementById('resultadoSalario');

    if (isNaN(horas) || horas <= 0) {
        resSalario.innerText = "Quantidade de horas inválida.";
        return;
    }

    let valorHora = 0;
    if (nivel === '1') {
        valorHora = 12.00;
    } else if (nivel === '2') {
        valorHora = 17.00;
    } else if (nivel === '3') {
        valorHora = 25.00;
    }
    
    const salarioFinal = valorHora * horas * 4.5;
    
    resSalario.innerText = `O salário mensal calculado é de ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
} 