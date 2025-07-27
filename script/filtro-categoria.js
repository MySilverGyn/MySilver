// Pega a categoria da tag <script>
const scriptTag = document.currentScript;
const categoriaDesejada = scriptTag.dataset.categoria;

fetch('MySilver/Produtos/produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('produtos-container');

    const filtrados = produtos.filter(p => p.categoria === Argolas);

    if (filtrados.length === 0) {
      container.innerHTML = '<p>Nenhum produto nesta categoria.</p>';
      return;
    }

    filtrados.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'produto-card';

      card.innerHTML = `
        <img src="../${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Erro ao carregar produtos:', err);
  });