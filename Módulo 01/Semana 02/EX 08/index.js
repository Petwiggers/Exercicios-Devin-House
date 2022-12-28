var valorInicial = parseInt(prompt('Digite o valor Inicial: '));
var valorRaiz = parseInt(prompt('Digite o valor da raiz: '));

var soma = valorInicial;
var resultado = valorInicial.toString();
for (i = 1; i <= 10; i++) {
  soma += valorRaiz;
  resultado += ',' + soma;
}
alert('A PA é: ' + resultado);
