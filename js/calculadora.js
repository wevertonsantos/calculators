// variáveis com os botões

const respostaTela = document.querySelector('.numero-inicial')
const numeros = document.querySelectorAll('.numeros')

// mostrando numero inicial na tela

respostaTela.innerHTML = 0

// função mostrar números na tela

const mostrarNumeros = () => {    
    numeros.forEach(numero => numero.addEventListener('click',() => {
        respostaTela.textContent += numero.id
    }))
}

mostrarNumeros()