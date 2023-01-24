//Minha resolução

function verificaPalindromo(palavra) {
  const [...letras] = palavra;

  let palavraDoAvesso = '';
  for (let i = letras.length - 1; i >= 0; i--) {
    palavraDoAvesso += letras[i];
  }
  if (palavra === palavraDoAvesso) {
    return true;
  } else {
    return false;
  }
}

//Minha copia
/*
const verificaPalindromo = (texto) => {
  const meio = texto.length / 2;
  const fim = texto.length - 1;
  for (let i = 0; i < meio; i++) {
    if (texto[i] !== texto[fim - i]) {
      return false;
    }
  }
  return true;
};
*/
//Professor
/*
function verificaPalindromo(texto) {
  // ana, radar, osso
  const meio = texto.length / 2;
  const fim = texto.length - 1;

  for (let i = 0; i < meio; i++) {
    if (texto[i] !== texto[fim - i]) {
      return false;
    }
  }

  return true;
}*/
//Arrow function com spred , reverse e join reduzido
//const verificaPalindromo = (t) => [...t].reverse().join('') === t;

const teste1 = verificaPalindromo('ana');
console.log(teste1);
const teste2 = verificaPalindromo('julia');
console.log(teste2);
