// Este é o arquivo exercicio4.js
// Ele contém o código JavaScript para calcular os dias de vida.

function calcularDiasDeVida() {
    // 1. Pegar o nome e a idade dos campos de input no HTML.
    let inputNome = document.getElementById("nomePessoa");
    let inputIdade = document.getElementById("idadePessoa");

    let nome = inputNome.value;
    // Usamos parseInt() para converter a idade para um número inteiro.
    let idade = parseInt(inputIdade.value);

    // 2. Validar a entrada do usuário.
    //    Verificamos se a idade NÃO é um número válido (isNaN)
    //    OU se a idade é menor que zero.
    //    Também verificamos se o campo nome não está vazio (opcional, mas boa prática).
    if (isNaN(idade) || idade < 0 || nome.trim() === "") {
        alert("Por favor, digite um nome e uma idade válida e não negativa.");
        // Limpa o campo de resultado se a entrada for inválida
        document.getElementById("resultado").textContent = "";
        return; // Para a execução da função
    }

    // 3. Realizar o cálculo (só acontece se a validação passar).
    const diasPorAno = 365;
    let totalDias = idade * diasPorAno;

    // 4. Preparar a mensagem de saída usando Template String.
    //    A sintaxe com crases (`) e ${variável}` é uma forma fácil
    //    de incluir variáveis diretamente na string.
    let mensagem = `${nome.toUpperCase()}, VOCÊ JÁ VIVEU ${totalDias} DIAS`;

    // 5. Exibir o resultado na página HTML.
    let divResultado = document.getElementById("resultado");
    divResultado.textContent = mensagem; // Define o texto dentro da div #resultado
}