let listaProdutos = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade');
    let nomeProduto = produto.split(' -')[0];
    let valorProduto = produto.split('R$')[1];
    quantidade = quantidade.value == '' ? 1 : quantidade.value;
    let subtotal = quantidade * valorProduto;
    let novoProduto = document.createElement('section');

    novoProduto.className = 'carrinho__produtos__produto';
    novoProduto.innerHTML = `<span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${subtotal} </span>`;
    listaProdutos.appendChild(novoProduto);

    let valorTotalAnterior = valorTotal.innerHTML.split('R$')[1];
    valorTotalAnterior = parseFloat(valorTotalAnterior) + subtotal;
    valorTotal.innerHTML = "R$"+valorTotalAnterior;

    limpaQuantidade();
}

function limpar() {
    while (listaProdutos.firstChild) {
        listaProdutos.removeChild(listaProdutos.firstChild);
      }
    valorTotal.innerHTML = 'R$ 0,00';
    limpaQuantidade();
}

function limpaQuantidade() {
    let quantidade = document.getElementById('quantidade');
    quantidade.value = '';
}