import Usuario from './Usuario.js';

const cEmail = document.getElementById('campo-email');
const cSenha = document.getElementById('campo-senha');
const bAcessar = document.getElementById('botao-acessar');
const pMensagem = document.getElementById('p-mensagem');

const usuarios = [new Usuario('Romeu', 'romeu@dih.br', '123456'), new Usuario('Isaac', 'isaac@dih.br', '123')];

bAcessar.addEventListener('click', () => {
  const email = cEmail.value;
  const senha = cSenha.value;

  let usuarioEcontrado = null;

  if (email && senha) {
    usuarioEcontrado = usuarios.find((usuario) => {
      return usuario.autenticar(email, senha);
    });
  }

  if (usuarioEcontrado) {
    pMensagem.innerHTML = `Olá, ${usuarioEcontrado.nome}`;
    cEmail = '';
    cSenha = '';
  } else {
    pMensagem.innerHTML = 'Credenciais inválidas!';
  }
});
