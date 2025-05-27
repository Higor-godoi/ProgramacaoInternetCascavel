let numero1 = document.querySelector("#numero1")
let numero2 = document.querySelector("#numero2")
let btSoma = document.querySelector("#btSoma")
let Resultado = document.querySelector("#Resultado")

function somarNumeros(){
  let primeiroValor = Number(numero1.value)
  let segundoValor = Number(numero2.value)

  let valorSoma = primeiroValor + segundoValor
  Resultado.textContent = valorSoma
}
