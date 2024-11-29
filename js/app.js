let jogosAlugados = 0;

function contarExibirJogosAlugados () {
    console.log (`Total de jogos alugados: ${jogosAlugados}`);
}

//Criando uma função alterarStatus que corresponde ao botão alterarStatus no HTML
function alterarStatus(id) {
    
//Declarando variaveis referentes aos elementos do HTML
        let game = document.getElementById(`game-${id}`);
        let imagem = game.querySelector(".dashboard__item__img");
        let botao = game.querySelector(".dashboard__item__button");
    
//Criando if para alterar texto e cor do botão ao ser clicado e a imagem do jogo
        if (botao.textContent === "Alugar") {
            botao.textContent = "Devolver";
            botao.classList.add("dashboard__item__button--return");
            imagem.classList.add("dashboard__item__img--rented");
            jogosAlugados++;
            
        } else {
//Usando função confirm para pedir confirmação de devolução de jogo
            if (confirm("Deseja mesmo devolver este jogo?")) {
                botao.textContent = "Alugar";
                botao.classList.remove("dashboard__item__button--return");
                imagem.classList.remove("dashboard__item__img--rented");
                jogosAlugados--;
            }      
        }

        contarExibirJogosAlugados();
    }

//addEventListener para esperar o DOM estar totalmente carregado para então executar uma função anonima que irá igualar jogosAlugados com a quantidade de arquivos achados no HTML com .dashboard__item__img--rented e chamar a função contarExibirJogosAlugados
//Funções anonimas são uteis para eventos especificos como nesse caso
    document.addEventListener("DOMContentLoaded", function() {
        jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
        contarExibirJogosAlugados();
    });