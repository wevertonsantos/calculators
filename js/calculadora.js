// variáveis com os botões

const botaoCE = document.querySelector('.CE')
const botaoC = document.querySelector('.C')
const numeroInicial = document.getElementById('numero-inicial')
const numeros = document.querySelectorAll('.numeros')
const operadores = document.querySelectorAll('.operadores')

// zerando calculadora

botaoC.addEventListener('click', () => {
    numeroInicial.innerText = ''
})

// função mostrar números na tela

const mostrarNaTela = () => {
            numeros.forEach(numero => numero.addEventListener('click', () => {
                    numeroInicial.innerText(numeroInicial.innerText += numero.id)
            }))

            operadores.forEach(operador => operador.addEventListener('click', () => {
                numeroInicial.innerText(numeroInicial.innerText += operador.id)
            }))
}

// pegando números da tela

const pegarNumeros = () => {
    console.log()
}

mostrarNaTela()
pegarNumeros()