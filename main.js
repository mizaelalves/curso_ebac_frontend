const form = document.getElementById('form-contatos')

let nome = []
let telefone = []

let linhas = ''

form.addEventListener('submit', function (e) {
  e.preventDefault()
  adicionarLinha();
  atualizarTabela()

})

function adicionarLinha() {

  const inputNome = document.getElementById('nome-contato')
  const inputTelefone = document.getElementById('telefone-contato')
  let id

  if (telefone.includes(parseFloat(inputTelefone.value))) {
    alert("Contato ja inserido, por favor adicione outro contato!")
  } else {
    nome.push(inputNome.value)
    telefone.push(parseFloat(inputTelefone.value))
    id = telefone.length

    let linha = `<tr>`
    linha += `<td>${id}</td>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`

    linha += `</tr>`

    linhas += linha


  }

  inputNome.value = ''
  inputTelefone.value = ''

}

function atualizarTabela() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas

}