const textarea = document.getElementById('comentario');
const contador = document.getElementById('contador');
const botaoEnviar = document.getElementById('btnEnviar');

textarea.addEventListener('input', function () {
    const quantidade = textarea.value.length;

    contador.textContent = quantidade + ' / 200 caracteres';

    if (quantidade > 200) {
        contador.style.color = 'red';
        botaoEnviar.disabled = true;
    } else {
        contador.style.color = 'black';
        botaoEnviar.disabled = false;
    }
});