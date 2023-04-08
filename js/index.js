// inputs

const inputAltura = document.getElementById('altura')
const inputPeso = document.getElementById('peso')

// button

const buttonCalculo = document.querySelector('#calcular')
const buttonLimpar = document.querySelector('#limpar')

// result

const textResultado = document.querySelector('.resultado')

// function calculo

buttonCalculo.addEventListener('click', (e) => {
    e.preventDefault()

    const altura = parseFloat(inputAltura.value)
    const peso = parseFloat(inputPeso.value)
    const resultado = peso / (Math.pow(altura,2))

    textResultado.innerHTML += `${resultado.toFixed(2)}`

})

buttonLimpar.addEventListener('click', (e) => {
    e.preventDefault()

    textResultado.innerHTML = ''
})
