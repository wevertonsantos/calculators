// pegando elemento tela

const tela = document.getElementById('banner-tela')

// variáveis com os botões de números, operadores e de reset

const botaoCE = document.querySelector('.CE')
const botaoC = document.querySelector('.C')
const numeros = document.querySelectorAll('.numeros')
const operadores = document.querySelectorAll('.operadores')

// zerando calculadora ao clicar no botão

botaoC.addEventListener('click', () => {
    tela.innerText = ''
})

// função ao clicar nos botões exibir na tela

const mostrarNaTela = () => {
            numeros.forEach(numero => numero.addEventListener('click', () => {
                    tela.innerText += numero.firstChild.nodeValue

            }))
}

// mostrar os números na tela

mostrarNaTela()