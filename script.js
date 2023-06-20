let sabor = "";
let refeicao = "";

const SelecionarSabor = (elemento, _sabor) => {
    let sabores = document.querySelectorAll('.sabor');

    sabores.forEach(item => {
        item.classList.remove('selecionado');
    });
    
    elemento.classList.add('selecionado');
    sabor = _sabor;
}

const SelecionarRefeicao = (elemento, _refeicao) => {
    let refeicoes = document.querySelectorAll('.refeicao');

    refeicoes.forEach(item => {
        item.classList.remove('selecionado');
    });

    elemento.classList.add('selecionado');
    refeicao = _refeicao;
}

const GerarReceita = () =>{

    let ingredientes = document.querySelector('#ingredientes').value;

    window.location.href = `/resultado.html?sabor=${sabor}&refeicao=${refeicao}&ingredientes=${ingredientes}`
}