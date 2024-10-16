/*1. Crie uma página HTML que tenha um botão com o texto CLIQUE
AQUI PARA MUDAR O TEXTO e logo abaixo do botão um parágrafo
que tenha a seguinte frase AQUI VAI APARECER ALGUMA COISA...
Ao clicar no botão deve ser chamado o prompt para o usuário
digitar o nome dele, assim que o usuário digitar o nome dele o texto
do parágrafo deve ser alterado para "E aí
NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site
dinâmico." 
*/

const button = document.querySelector('.botao')
const text = document.querySelector('.texto')

function chamarPrompt() {
            button.onclick = function nomeUsuario() {
                const nome = prompt('Digite seu nome')
    
                if (nome) {
                    text.textContent = `E aí ${nome}! Você está deixando o seu site dinâmico.`
                } else {
                    alert('Digite um nome válido!')
                }
        }
}
chamarPrompt()