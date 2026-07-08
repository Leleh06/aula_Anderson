const botoesFechar = document.querySelectorAll('.btnFechar');

botoesFechar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const card = botao.closest('.card');
        card.remove();
    });
});