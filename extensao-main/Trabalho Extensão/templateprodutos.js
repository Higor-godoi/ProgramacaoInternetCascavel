document.addEventListener("DOMContentLoaded", () => {
  const imagemProduto = document.getElementById("imagemProduto")
  const nomeProduto = document.getElementById("nomeProduto")
  const precoAntigoProduto = document.getElementById("precoAntigoProduto")
  const precoNovoProduto = document.getElementById("precoNovoProduto")
  const linkMLProduto = document.getElementById("linkMLProduto")
  const descricaoProduto = document.getElementById("descricaoProduto")

  // Lê os parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  const nome = params.get("nome");
  const img = params.get("img");
  const precoAntigo = params.get("precoAntigo");
  const precoNovo = params.get("precoNovo");
  const descricao = params.get("descricao");
  const link = params.get("link");

  // Atualiza os elementos
  if (nome) nomeProduto.textContent = nome;
  if (img) imagemProduto.src = img;
  if (precoAntigo) precoAntigoProduto.textContent = precoAntigo;
  if (precoNovo) precoNovoProduto.textContent = precoNovo;
  if (descricao) descricaoProduto.textContent = descricao;
  if (link) {
    linkMLProduto.addEventListener("click", () => {
      window.open(link, "_blank");
    });
  }
});
