// variáveis para pegar e mostrar o número na tela

const numeroNaTela = document.getElementById('numero-inicial')
const pegarNumeroIncial = document.querySelector('.numero-inicial')
const mostrarNumeroInicial = pegarNumeroIncial.innerText

// variáveis com os botões

const botaoCE = document.querySelector('.CE')
const botaoC = document.querySelector('.C')
const numeros = document.querySelectorAll('.numeros')
const operadores = document.querySelectorAll('.operadores')

// zerando calculadora

botaoC.addEventListener('click', () => {
    numeroInicial.innerText = ''
})

// função mostrar números na tela

const mostrarNaTela = () => {
            numeros.forEach(numero => numero.addEventListener('click', () => {
                    numeroNaTela.innerText(numeroNaTela.innerText += numero.id)
            }))

            operadores.forEach(operador => operador.addEventListener('click', () => {
                numeroNaTela.innerText(numeroNaTela.innerText += operador.id)
            }))
}

// pegando números da tela

const pegarNumeros = () => {
    console.log(mostrarNumeroInicial)
}

mostrarNaTela()
pegarNumeros()