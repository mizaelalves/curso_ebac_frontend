const AElement = document.getElementById("campo-a")
const BElement = document.getElementById("campo-b")
const btnElement = document.getElementById("btn-submit")
const form = document.getElementById('form')


let formValido = false;


form.addEventListener('submit', function(e){
  e.preventDefault()
  const mensagemSucesso = `<span>Formulário válido</span>`
  const mensagemInvalido = `Formulário inválido`
  formValido = parseInt(AElement.value.length) < parseInt(BElement.value.length)
  
  if (formValido){
    const containerMensagemSucesso = document.querySelector('.success-message')
    containerMensagemSucesso.innerHTML = mensagemSucesso
    containerMensagemSucesso.style.backgroundColor = "#27ae60"
    containerMensagemSucesso.style.display = 'block'
    AElement.value = ''
    BElement.value = ''
    
    
  }else{
    const containerMensagemSucesso = document.querySelector('.success-message')
    containerMensagemSucesso.innerHTML = mensagemInvalido 
    containerMensagemSucesso.style.display = 'block'
    containerMensagemSucesso.style.backgroundColor = "#f30000"
    
    
  }
})