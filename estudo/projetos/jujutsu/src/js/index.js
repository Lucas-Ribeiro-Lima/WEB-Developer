const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');
const menuBar = document.getElementById('menu-bar');
const botoesResponsivo = document.querySelector('.botoes');

botoes.forEach((botao, index) =>{
    botao.addEventListener("click", () => {

        personagemSelecionado = desselecionarPersonagem();
        botaoSelecionado = desselecionarBotao();
        
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        
        personagemSelecionado.classList.remove("selecionado");
        personagem[index].classList.add("selecionado");
    });
});

menuBar.addEventListener("click", () => {
    ocultarMenu();
});

function ocultarMenu () {
    if(botoesResponsivo.classList.contains("ativo")){
        botoesResponsivo.classList.remove("ativo");
        return 200;
    };
    botoesResponsivo.classList.add("ativo");
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    return personagemSelecionado;
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    return botaoSelecionado;
}


