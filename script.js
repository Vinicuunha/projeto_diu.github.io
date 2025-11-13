const slider = document.getElementById('sliderFonte');
const valor = document.getElementById('valorFonte');

slider.addEventListener('input', () => {
  const tamanho = slider.value + 'px';
  document.body.style.fontSize = tamanho; // altera o tamanho da fonte do body
  valor.textContent = tamanho; // atualiza o número exibido
});
