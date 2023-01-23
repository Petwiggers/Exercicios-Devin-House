const entradaNome = document.getElementById('nome');
const botaoAcao = document.getElementById('acao');
const pMensagem = document.getElementById('mensagem');

console.log(entradaNome, botaoAcao, pMensagem);
/*
const resultado = mensagemOla('Peterson Wiggers ');
console.log(resultado);
*/
const mensagemOla = (nome) => 'Olá, ' + nome;

botaoAcao.addEventListener('click', () => {
  /*const nome = entradaNome.value;
  const mensagem = mensagemOla(nome);
  pMensagem.innerHTML = mensagem;*/

  //isso tudo pode ser resumido nisso aqui
  pMensagem.innerHTML = mensagemOla(entradaNome.value);
});
