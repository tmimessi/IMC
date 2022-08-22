// função pra calcular o IMC
export function calculateIMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

// função pra validar se o que foi digitado é um número ou se não tem nada digitado
export function notANumber(value){
  return isNaN(value) || value == ""
}