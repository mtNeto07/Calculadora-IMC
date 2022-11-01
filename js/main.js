

 import {modal} from './modal.js'
 import {AlertError}  from "./alert-error.js"
 import {calculateIMC, notAnumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')




form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOHeightIsNotANumber = notAnumber(weight) || notAnumber(height)

  if (weightOHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const menssage = `Seu Imc é de ${result}`

  modal.message.innerText = menssage

  modal.open()
}

