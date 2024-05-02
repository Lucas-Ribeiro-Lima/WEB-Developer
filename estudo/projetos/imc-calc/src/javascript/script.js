/**
 * Calculate the IMC based on peso and altura
 * @param {Number} peso 
 * @param {Number} altura 
 * @returns  The calculated IMC and the respective status
 */
function calculaIMC(peso, altura){
  const imc = peso / (Math.pow(altura, 2))
  const string = `IMC: ${imc.toFixed(1)}`

  let resultado

  if (Number.isNaN(imc) || imc === undefined || imc === Infinity){
    return resultado = `Valores inválidos`
  }

  if (imc > 0 && imc < 18.5) {
    resultado = `${string} Status: (Abaixo do peso)`
  } 
  else if (imc >= 18.5 && imc < 25) {
    resultado = `${string} Status: (Peso normal)`
  }
  else if (imc >= 25 && imc < 30) {
    resultado = `${string} Status: (Sobrepeso)`
  }
  else if (imc >= 30 && imc < 35) {
    resultado = `${string} Status: (Obesidade grau 1)`
  }
  else if (imc >= 35 && imc < 40) {
    resultado = `${string} Status: (Obesidade grau 2)`
  }
  else if (imc >= 40) {
    resultado = `${string} Status: (Obesidade grau 3)`
  }

  return resultado
}

/**
 * 
 * Controls the errors on the form.
 * @param {Array} formErrors
 * @returns return True if the form have errors
 * 
 */
function formErrors(values) {
const errorMsg = document.querySelectorAll('span.error')
const inputMsg = document.querySelectorAll('.formulario input')

const errors = []
values.forEach((value, index) => {
  if (!value) {
    inputMsg[index].classList.add('error', 'ativo')
    errorMsg[index].classList.add('ativo')
    errors.push(!value)
  } 
  else {
    inputMsg[index].classList.remove('error', 'ativo')
    errorMsg[index].classList.remove('ativo')
    errors.push(value)
  }
})
  return errors.includes(true)
}

/**
 * 
 * Control the form submit
 * @param { Number } peso 
 * @param { Number } altura 
 * @returns void
 * 
 */
function formControl(peso, altura) {
  const resultadoDiv = document.querySelector('.resultado')

  resultadoDiv.classList.remove('ativo')

  const errors = formErrors([peso, altura])

  if (!errors) {
    const imc = calculaIMC(peso, altura)

    resultadoDiv.classList.add('ativo')
    resultadoDiv.innerHTML = imc
  }
}

!function handleSubmit() {
  const form = document.querySelector('.formulario')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const peso = Number(event.target.peso.value)
    const altura = Number(event.target.altura.value.replace(',', '.'))

    formControl(peso, altura)
  })
}()