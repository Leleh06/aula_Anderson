const campoBusca = document.getElementById('campoBusca')
const cards = document.querySelectorAll('.card-produto')

campoBusca.addEventListener('input', function(){
    const termo = campoBusca.value.toLowerCase();

    cards.forEach(function(card) {
        const titulo = card.querySelector('.titulo-produto').textContent.toLowerCase();

        if(titulo.includes(termo)){
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    });
});