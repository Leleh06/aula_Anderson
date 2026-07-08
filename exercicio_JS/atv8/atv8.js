const barra = document.getElementById('barraProgresso');

window.addEventListener('scroll', function() {
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollAtual = window.scrollY;

    const porcentagem = (scrollAtual / alturaTotal) * 100;

    barra.style.width = porcentagem + '%';
});