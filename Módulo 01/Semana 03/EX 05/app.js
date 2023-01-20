function somador(...numeros) {
  soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

const resultado = somador(1, 2, 3, 4, 5, 6);
console.log(resultado);
