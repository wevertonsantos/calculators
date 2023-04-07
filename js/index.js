// inputs

const inputAltura = document.getElementById('altura')
const inputPeso = document.getElementById('peso')

// button

const buttonCalculo = document.querySelector('.botao')

// result

const resultado = document.querySelector('.resultado')

// function calculo

buttonCalculo.addEventListener('click', (e) => {
    e.preventDefault()

    const altura = parseFloat(inputAltura.value)
    const peso = parseFloat(inputPeso.value)

    resultado.innerHTML += parseInt(Math.pow(peso, 2))
})