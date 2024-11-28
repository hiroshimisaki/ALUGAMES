//Criando uma função alterarStatus que corresponde ao botão alterarStatus no HTML
function alterarStatus(id) {

//Console.log apenas para verificar se o id corresponde ao do botão clicado
    console.log(`o id é ${id}`);

//Declarando variaveis referentes aos elementos do HTML
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector(".dashboard__item__img");
    let botao = game.querySelector(".dashboard__item__button");

//Criando if para alterar texto e cor do botão ao ser clicado
    if (botao.textContent === "Alugar") {
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    } else {
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");
    }

//Criando id para alterar a imagem ao ser clicado
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
    } else {
        imagem.classList.add("dashboard__item__img--rented");
    }
}