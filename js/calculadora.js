// variáveis com os botões

const botaoCE = document.querySelector('.CE')
const botaoC = document.querySelector('.C')
const respostaTela = document.querySelector('.numero-inicial')
const numeros = document.querySelectorAll('.numeros')

// zerando calculadora

botaoC.addEventListener('click', () => {
    respostaTela.innerHTML = 0
})

// mostrando numero inicial na tela

respostaTela.innerHTML = 0

// função mostrar números na tela

const mostrarNumeros = () => {    
    numeros.forEach(numero => numero.addEventListener('click',() => {
        respostaTela.textContent += numero.id
    }))
}

mostrarNumeros()