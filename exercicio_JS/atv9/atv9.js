const senha = document.getElementById('senha');
const aviso = document.getElementById('avisoSenha');

senha.addEventListener('input', function () {
    const tamanho = senha.value.length;

    if (tamanho < 8) {
        aviso.textContent = 'Senha muito curta!';
        aviso.classList.add('senha-fraca');
        aviso.classList.remove('senha-forte');
    } else {
        aviso.textContent = 'Comprimento aceito!';
        aviso.classList.add('senha-forte');
        aviso.classList.remove('senha-fraca');
    }
});