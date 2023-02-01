export default class Personagem {
  nome;
  percentualVida;
  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
  }

  sofreuDano(porcentualDano) {
    this.percentualVida -= porcentualDano;
  }

  usouKitMedico() {
    this.percentualVida += 10;
  }
}
