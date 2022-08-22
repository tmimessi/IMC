export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open(){
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

// função pra sair da tela de mensagem qdo clicar no botão fechar
Modal.buttonClose.onclick = () => Modal.close()

// função pra fechar a tela de mensagem qdo apertar esc
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if (event.key === 'Escape'){ //escape é a tecla Esc
    Modal.close()
  }
}
