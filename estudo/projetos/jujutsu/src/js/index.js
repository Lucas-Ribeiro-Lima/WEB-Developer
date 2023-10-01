const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');

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

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    return personagemSelecionado;
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    return botaoSelecionado;
}
