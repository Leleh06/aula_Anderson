const titulos = document.querySelectorAll('.titulo-acordeao')

titulos.forEach(function (titulo) {
    titulo.addEventListener('click', function () {
        const conteudo = titulo.nextElementSibling;

        if (conteudo.style.display === 'block') {
            conteudo.style.display = 'none'
        } else {
            conteudo.style.display = 'block'
        }

    });

})