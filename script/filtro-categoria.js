const scriptTag = document.currentScript;
const categoriaDesejada = scriptTag.dataset.categoria;

fetch('Produtos/produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('produtos-container');

    const filtrados = produtos
      .filter(p => p.categoria.toLowerCase() === categoriaDesejada.toLowerCase())
      .sort((a, b) => a.nome.localeCompare(b.nome)); // ordenado por nome

    if (filtrados.length === 0) {
      container.innerHTML = '<p>Nenhum produto nesta categoria.</p>';
      return;
    }

    filtrados.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'produto';

      card.innerHTML = `
        <img src="/MySilver/${produto.imagem}" alt="${produto.nome}">
        <div class="produto-info">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Erro ao carregar produtos:', err);
    document.getElementById('produtos-container').innerHTML = '<p style="color:red;">Erro ao carregar produtos.</p>';
  });