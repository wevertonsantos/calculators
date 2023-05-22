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

botaoCE.addEventListener('click', () => {
    tela.innerText = ''
})

// função para realizar cálculos

const calculadora = () => {
    
    pegandoOperadores()
    exibirNumerosTela()
    
}

// pegando operadores

const pegandoOperadores = () => {
    operadores.forEach(operador => operador.addEventListener('click', () => {
        const operadorCalculo = operador.firstChild.nodeValue
        
        if (operadorCalculo === '/'){
            tela.innerText += operadorCalculo
        }
        if (operadorCalculo === '*'){
            tela.innerText += operadorCalculo
        }
        if (operadorCalculo === '+'){
            tela.innerText += operadorCalculo
        }
        if (operadorCalculo === '-'){
            tela.innerText += operadorCalculo
        }

        if (operadorCalculo === '.'){
            tela.innerText += operadorCalculo
        }

        resultado(operadorCalculo)

    }))
}

// exibindo números na tela

const exibirNumerosTela = () => {
    numeros.forEach(numero => numero.addEventListener('click', () => {

        tela.innerText += numero.firstChild.nodeValue

    }))
}

// exibindo resultado

const resultado = (operadorCalculo) => {
    if(operadorCalculo === '='){
        tela.innerText = eval(tela.innerText)
    }
}

// calculadora

calculadora()