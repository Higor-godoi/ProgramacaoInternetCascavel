let nota1bim = document.querySelector("#nota1bim")
let nota2bim = document.querySelector("#nota2bim")
let btAprovacao = document.querySelector("#btAprovacao")
let h3Resultado = document.querySelector("h3resultado")

function CalcularMediaAluno(){

     //Retornando valores dos inputs e 
     //Convertendo em numeros.
    let nota1 = Number (nota1bim.value);
    let nota2 = Number (nota2bim.value);

     //calcular a media.
     let media = (nota1 + nota2) / 2;
      
     //Verificar se o aluno está aprovado ou não.
     if(media >= 60){
        h3resultado.textContent = "O Aluno Esta Aprovado"
     }else{
        h3Resultado.textContent = "O Aluno Esta reprovado"
     }
    }
    btAprovacao.onclick = function(){
        CalcularMediaAluno();
}