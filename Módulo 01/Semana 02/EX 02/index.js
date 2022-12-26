var idade = parseInt(prompt('Digite sua idade: '));
var resposta;
if (idade <= 15 && idade >= 0) {
  resposta = 'Você é Jovem';
} else if (idade > 15 && idade <= 64) {
  resposta = 'Você é um Adulto';
} else if (idade >= 65 && idade <= 130) {
  resposta = 'Você é um Idoso';
} else {
  resposta = 'Opção Inválida';
}
window.alert(resposta);
