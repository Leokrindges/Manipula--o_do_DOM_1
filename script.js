// Crie uma página HTML que tenha um botão com o texto CLIQUE
// AQUI PARA MUDAR O TEXTO e logo abaixo do botão um parágrafo
// que tenha a seguinte frase AQUI VAI APARECER ALGUMA COISA...
// Ao clicar no botão deve ser chamado o prompt para o usuário
// digitar o nome dele, assim que o usuário digitar o nome dele o texto
// do parágrafo deve ser alterado para "E aí
// NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site
// dinâmico."


function pegaNome() {
    const nome = prompt("Digite seu nome")
    document.getElementById('mudaTexto').innerHTML = 'E aí ' + nome + "! Você está deixando o seu site dinâmico."
}



// Crie uma página que tenha o título "Contador de Cliques". Na
// página deve ter 2 botões, um deles deve estar escrito INCREMENTAR
// e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos
// botões deve ter um parágrafo contendo a seguinte frase "O
// contador está com 0 cliques".

// Conforme o usuário vai clicando no botão Incrementar deve ser
// incrementado uma variável no javascript e ir atualizando a página
// conforme o número de cliques.

// Ao clicar no botão Zerar contador o parágrafo deve sumir da tela.
// Ao clicar no botão de Incrementar novamente o parágrafo deve
// aparecer com a mensagem "O contador está com 1 cliques" e ir
// atualizando conforme o usuário for clicando para incrementar.
let marcador = 0

function incrementaMarcador() {
    marcador++
    document.getElementById('mudaTextoContador').innerHTML = "O contador está com " + marcador + " cliques"
}
function zeraMarcador() {
    marcador = 0;
    document.getElementById('mudaTextoContador').innerHTML = "O contador está com " + marcador + " cliques"
}