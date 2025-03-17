//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const lista = document.querySelector('#listaAmigos')
const resultado = document.querySelector('#resultado')
const nome = document.querySelector('#amigo')
const amigos = []

function adicionarAmigo() {
    if (nome.value.trim().length <= 0) {
      alert('Digite um nome no campo!')
      return
    }
    amigos.push(nome.value)
    listarAmigos()
    nome.value = ''
  }