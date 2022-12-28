var valorInicial = 3;
var valorRaiz = 3;
var resultado = pars(valorInicial);
for (i = 1; i <= 10; i++) {
  resultado += ',' + valorInicial + valorRaiz * i;
}
console.log(resultado);
