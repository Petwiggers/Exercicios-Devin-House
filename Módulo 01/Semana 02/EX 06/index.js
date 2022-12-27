var operacao = prompt('Digite qual das operações deseja fazer "+","-","/", ou "*"');
var numero1 = parseFloat(prompt('Digite o valor do primeiro número: '));
var numero2 = parseFloat(prompt('Digite o valor do segundo número: '));

if (operacao == '+') {
  var resultado = numero1 + numero2;
} else if (operacao == '-') {
  var resultado = numero1 - numero2;
} else if (operacao == '/') {
  var resultado = numero1 / numero2;
} else if (operacao == '*') {
  var resultado = numero1 * numero2;
} else {
  alert('OPÇÃO INVÁLIDA');
}
alert('O resultado do seu cálculo é: ' + resultado);
