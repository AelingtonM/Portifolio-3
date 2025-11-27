function atualizarCarrinho() {
  const container = document.getElementById('carrinho');
  container.innerHTML = '';

  if (carrinho.length === 0) {
    container.innerHTML = '<p>Carrinho vazio</p>';
    document.getElementById('totalGeral').textContent = 'Total: R$ 0,00';
    document.getElementById('totalItens').textContent = 'Itens: 0';
    return;
  }

  let totalItens = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    totalItens += item.quantidade;
    const div = document.createElement('div');
    div.innerHTML = `
      <p>
        <strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)} x ${item.quantidade} = R$ ${subtotal.toFixed(2)}
        <button onclick="removerDoCarrinho(${item.id})">Remover</button>
      </p>
    `;
    container.appendChild(div);
  });

  calcularTotal();
  document.getElementById('totalItens').textContent = `Itens: ${totalItens}`;
}
