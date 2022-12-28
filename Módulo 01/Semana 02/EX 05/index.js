var numero = parseInt(prompt('Digite o número desejado:'));
var par = 0,
  impar = 0;
if (isNaN(numero)) {
  alert('Número inválido');
} else {
  for (var i = 0; i <= numero; i++) {
    if (i % 2 == 0) {
      par += 1;
    } else if (i % 2 == 1) {
      impar += 1;
    }
  }
}
alert('Entre 0 e ' + numero + ' tem ' + par + ' números pares e ' + impar + ' impares');
