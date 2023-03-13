const enderecos = document.querySelectorAll('.endereco');

enderecos.forEach(endereco => {
  endereco.addEventListener('click', () => {
    const enderecoSelecionado = endereco.dataset.endereco;
    const detalhes = document.querySelectorAll('.detalhes');

    
    detalhes.forEach(detalhe => {
      if (detalhe.dataset.endereco === enderecoSelecionado) {
        detalhe.style.display = 'block'; 

      } else {
        detalhe.style.display = 'none';

      }
    });

    enderecos.forEach(endereco => {
        endereco.style.display = 'none';
    });
    
  });
});
