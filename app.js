let produtoSelecionado = "";
let valorSelecionado = 0;

const modal = document.getElementById("modal");

window.selecionarProduto = (produto, valor) => {

  produtoSelecionado = produto;
  valorSelecionado = valor;

  modal.style.display = "flex";
};

window.criarPedido = () => {

  const nome = document.getElementById("nome").value;
  const uid = document.getElementById("uid").value;
  const email = document.getElementById("email").value;

  if(!nome || !uid || !email){

    alert("Preencha todos os campos");
    return;
  }

  alert(
    `Pedido criado!\n\nProduto: ${produtoSelecionado}\nValor: R$ ${valorSelecionado}`
  );

  modal.style.display = "none";
};