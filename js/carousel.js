document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel-simples');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
    const intervalTime = 4000; // Tempo em milissegundos (3 segundos)

    function nextSlide() {
        // 1. Remove a classe 'active' do item atual
        items[currentIndex].classList.remove('active');

        // 2. Calcula o índice do próximo slide: (0+1)%3 = 1, (1+1)%3 = 2, (2+1)%3 = 0 (volta para o início)
        currentIndex = (currentIndex + 1) % totalItems;

        // 3. Adiciona a classe 'active' ao próximo item
        items[currentIndex].classList.add('active');
    }

    // Inicia o carrossel, chamando a função nextSlide a cada 'intervalTime'
    setInterval(nextSlide, intervalTime);
});
