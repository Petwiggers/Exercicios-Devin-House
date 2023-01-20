const procuraMinMax = (vetor) => {
  let menorNumero = 0;
  let maiorNumero = 0;

  if (vetor === null || vetor === undefined) {
    console.log(`Não é possível encontrar`);
  } else {
    for (let i = 0; i < vetor.length; i++) {
      if (typeof vetor[i] === 'number') {
        if (i === 0) {
          menorNumero = vetor[i];
          maiorNumero = vetor[i];
        } else {
          if (vetor[i] < menorNumero) {
            menorNumero = vetor[i];
          }
          if (vetor[i] > maiorNumero) {
            maiorNumero = vetor[i];
          }
        }
      } else {
        console.log(`Não é possível encontrar`);
      }
    }
    console.log(`Maior número: ${maiorNumero}\nMenor número: ${menorNumero}`);
  }
};
//procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
//procuraMinMax([]);
//procuraMinMax([1]);
//procuraMinMax([1, -1]);
//procuraMinMax(null);
//procuraMinMax([-2, -2, -2, -2]);
//procuraMinMax([(20, 10, 30)]);
