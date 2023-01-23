//Exemplo com for.each com Arrow

const somador = (...numeros) => {
  let soma = 0;
  numeros.forEach((num) => {
    soma += num;
  });
  return soma;
};

/*function somador(...numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}*/

const resultado = somador(1, 2, 3, 4, 5, 6);
console.log(resultado);
