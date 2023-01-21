const verificaPalindromo = (palavra) => {
  const [...letras] = palavra;
  console.log(letras.lenght);
  const z = palavra.lenght;
  let palavraDoAvesso = '';
  for (let i = z - 1; i >= 0; i--) {
    palavraDoAvesso += letras[i];
  }
  if (palavra === palavraDoAvesso) {
    console.log(true);
  } else {
    console.log(false);
  }
};

verificaPalindromo('ana');
