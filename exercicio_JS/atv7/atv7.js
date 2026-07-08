const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    const texto = inputTarefa.value.trim();

    if (texto !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = texto;
        listaTarefas.appendChild(novoItem);

        inputTarefa.value = '';
    }
});