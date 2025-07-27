fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('produtos-container');
    container.innerHTML = ''; // limpa antes de inserir

    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'produto-card';

      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" />
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