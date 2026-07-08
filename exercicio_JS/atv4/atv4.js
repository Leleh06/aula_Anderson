const linhas = document.querySelectorAll('#corpoTabela tr');

linhas.forEach(function (linha) {
    linha.addEventListener('click', function () {
        linhas.forEach(function (l) {
            l.classList.remove('selected');
        });

        this.classList.add('selected')
    });
});