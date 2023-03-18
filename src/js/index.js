// passo 1- dar um jeito de pegar o elemento Html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens =document.querySelectorAll('.imagem');

// passo 2- dar um jeito de indentificar  o clique do usuário no botão
botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click',()=>{
        
        desativarBotaoSelecionado();


        SelecionarBotaoCarrossel(botao);

    
        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function SelecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
