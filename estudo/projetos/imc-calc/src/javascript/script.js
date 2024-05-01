function calculaIMC(peso, altura){
  const imc = peso / (Math.pow(altura, 2))
  const string = `IMC: ${imc.toFixed(1)}`

  let resultado

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

  if (Number.isNaN(imc) || imc === undefined || imc === Infinity){
    resultado = `Valores inválidos`
  }

  return resultado
}

!function handleSubmit() {
  const form = document.querySelector('.formulario')
  const resultado = document.querySelector('.resultado')
  const errorMsg = document.querySelectorAll('.error')
  const inputErrorMsg = document.querySelectorAll('.formulario input')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const peso = Number(event.target.peso.value)
    const altura = Number(event.target.altura.value.replace(',', '.'))

    if (!peso) {
      inputErrorMsg[0].classList.add('error', 'ativo')
      errorMsg[0].classList.add('ativo')
      resultado.classList.remove('ativo')
    } else {
      inputErrorMsg[0].classList.remove('error', 'ativo')
      errorMsg[0].classList.remove('ativo')
    }
    
    if (!altura) {
      errorMsg[1].classList.add('ativo')
      inputErrorMsg[1].classList.add('error', 'ativo')
      resultado.classList.remove('ativo')
    } else {
      errorMsg[1].classList.remove('ativo')
      inputErrorMsg[1].classList.remove('error', 'ativo')
    }

    if (peso && altura) {
      const imc = calculaIMC(peso, altura)
  
      resultado.classList.add('ativo')
      resultado.innerHTML = imc
    }
  })
}()