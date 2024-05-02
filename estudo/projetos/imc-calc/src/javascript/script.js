!function handleSubmit() {
  const form = document.querySelector('.formulario')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const peso = Number(event.target.peso.value)
    const altura = Number(event.target.altura.value.replace(',', '.'))

    formControl(peso, altura)
  })
}()

/**
 * Calculate the IMC based on peso and altura
 * @param {Number} peso 
 * @param {Number} altura 
 * @returns  The calculated IMC and the respective status
 */
function calculaIMC(peso, altura){
  const imc = peso / (Math.pow(altura, 2))
  const imcStr = `IMC: ${imc.toFixed(2)}`
  const nivel = getNivelIMC(imc)

  if (Number.isNaN(imc) || imc === undefined || imc === Infinity){
    return resultado = `Valores inválidos`
  }

  const resultado = `${imcStr} ${nivel}`

  return resultado
}

function getNivelIMC(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc > 40) return string = nivel[5]
  
  if (imc >= 35) return string = nivel[4]

  if (imc >= 30) return string = nivel[3]

  if (imc >= 25) return string = nivel[2]

  if (imc >= 18.5) return string = nivel[1]

  if (imc < 18.5) return string = nivel[0]
}

/**
 * 
 * @param {Number} imc 
 * @returns The string with the correct IMC level string
 */
function getNivelIMC(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obseidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
  let string

  if (imc > 0 && imc < 18.5) {
    string = `Status: ${nivel[0]}`
  } 
  else if (imc >= 18.5 && imc < 25) {
    string = `Status: ${nivel[1]}`
  }
  else if (imc >= 25 && imc < 30) {
    string = `Status: ${nivel[2]}`
  }
  else if (imc >= 30 && imc < 35) {
    string = `Status: ${nivel[3]}`
  }
  else if (imc >= 35 && imc < 40) {
    string = `Status: ${nivel[4]}`
  }
  else if (imc >= 40) {
    string = `Status: ${nivel[5]}`
  }

  return string
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

