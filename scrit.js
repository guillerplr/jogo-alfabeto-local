const botoes = document.querySelectorAll('li');


botoes.forEach((e)=>{
    e.addEventListener('click', (e)=> e.target.classList.add('selecionado'))
})