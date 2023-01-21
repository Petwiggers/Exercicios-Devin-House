function verificaPalindromo(palavra) {
  const [...letras] = palavra;
  let palavraDoAvesso = '';
  for (let i = letras.length; i >= 0; i--) {
    palavraDoAvesso += letras[i];
  }
  if (palavra === palavraDoAvesso) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindromo('ana');
