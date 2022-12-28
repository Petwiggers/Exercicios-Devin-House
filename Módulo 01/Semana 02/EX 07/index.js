var primos = 0;
var contador = 0;
for (var i = 1; i <= 1000; i++) {
  for (var t = 1; t <= i; t++) {
    if (i % t == 0) {
      contador++;
    }
  }
  if (contador == 2) {
    primos++;
    console.log(i);
  }
  contador = 0;
}
console.log('Entre 0 a 1000 existem ' + primos + ' números primos');
