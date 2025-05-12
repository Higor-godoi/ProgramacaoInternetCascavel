function calcularTroco() {
    const valorPago = parseFloat(document.getElementById('valorPago').value);
    const precoProduto = parseFloat(document.getElementById('precoProduto').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (isNaN(valorPago) || isNaN(precoProduto)) {
      resultadoDiv.innerText = 'Por favor, insira valores válidos.';
      return;
    }
  
    const troco = valorPago - precoProduto;
  
    if (troco < 0) {
      resultadoDiv.innerText = `Valor insuficiente. Faltam R$ ${(troco * -1).toFixed(2)}`;
    } else {
      resultadoDiv.innerText = `Troco: R$ ${troco.toFixed(2)}`;
    }
  }
  