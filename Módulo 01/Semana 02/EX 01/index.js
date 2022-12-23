var idade = window.prompt('Digite sua idade: ');
var resposta;
if (idade <= 15) {
  resposta = 'Você é Jovem';
} else if (idade > 15 && idade <= 64) {
  resposta = 'Você é um Adulto';
} else {
  resposta = 'Você é Idoso';
}
window.alert(resposta);
