var numero = 0;
var soma = 0;

while (numero != -1) {
  soma += numero;
  var numero = parseFloat(window.prompt('Digite o valor que deseja somar: '));
}

window.alert('O resultado da soma dos número digitados foi: ' + soma);
