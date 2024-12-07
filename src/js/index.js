/*
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover
a seleção dele

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover
a seleção dele
*/

// Seleciona todos os elementos que têm a classe "botao"
const botoes = document.querySelectorAll(".botao");

// Seleciona todos os elementos que têm a classe "personagem"
const personagens = document.querySelectorAll(".personagem");

// Itera por cada botão encontrado
botoes.forEach((botao, index) => {
    // Adiciona um evento de clique a cada botão
    botao.addEventListener("click", () => {
        // Chama a função para remover a seleção do botão atualmente selecionado
        desselecionarBotao();
        // Adiciona a classe "selecionado" ao botão clicado
        botao.classList.add("selecionado");
        // Chama a função para remover a seleção do personagem atualmente selecionado
        desselecionarPersonagem();
        // Adiciona a classe "selecionado" ao personagem correspondente ao índice do botão clicado
        personagens[index].classList.add("selecionado");
    });
});

// Função para desmarcar o personagem atualmente selecionado
function desselecionarPersonagem() {
    // Busca o elemento que tem as classes "personagem" e "selecionado"
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    // Remove a classe "selecionado" desse personagem, se existir
    personagemSelecionado.classList.remove("selecionado");
}

// Função para desmarcar o botão atualmente selecionado
function desselecionarBotao() {
    // Busca o elemento que tem as classes "botao" e "selecionado"
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    // Remove a classe "selecionado" desse botão, se existir
    botaoSelecionado.classList.remove("selecionado");
}
