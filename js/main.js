import { Modal } from "./modal.js"
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from "./utils.js"
// variáveis - toda vez que clico no botão de submit, ele tenta atualizar a página e ela é recarregada, então tem que mudar esse comportamento, por isso, cria uma variável para o form. o inputWeight/Height são as referências do input. 
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// tirando o padrão
form.onsubmit = function(event) {
  event.preventDefault()
  // o inputWeight/Height são as referências do input e aí o value são os valores que foram digitados dentro dele, transformando em variável p/ trabalhar com esses valores.
  const weight = inputWeight.value
  const height = inputHeight.value

  // se não for um número, abrir o alerta e parar a execução com o return; se for, continuar a execução e fechar o alerta. 
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

// funções pra fechar o pop-up vermelho qdo voltar a digitar nos campos
inputWeight.oninput = function(){
  AlertError.close()
}

inputHeight.oninput = function(){
  AlertError.close()
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`

  Modal.open()
  Modal.message.innerText = message
}