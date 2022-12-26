var resultado = 0;
var numero = parseInt(window.prompt('Digite o número que deseja realizar a tabuada:'));
var tabuada = '';

if (isNaN(numero)) {
  alert('Número inválido');
} else {
  for (var i = 0; i <= 10; i++) {
    resultado = numero * i;
    tabuada += numero + ' x ' + i + '=' + resultado + '\n';
    //COM INTERPULAÇÃO
    //tabuada += `${numero} x ${i} = ${numero * i} \n`;
  }
}
window.alert(tabuada);
