export default class Time {
  nome;
  sigla;
  vitorias = 0;
  derrotas = 0;
  empates = 0;
  golsMarcados = 0;
  golsSofridos = 0;
  constructor(nome, sigla) {
    this.nome = nome;
    this.sigla = sigla;
  }

  get numeroDeJogos() {
    return this.vitorias + this.derrotas + this.empates;
  }

  get numeroDePontos() {
    return this.vitorias * 3 + this.derrotas * 1;
  }

  computarPartida(partida) {
    let golsInstancia = 0;
    let golsAdversario = 0;
    if (this.sigla === partida.siglaTimeA) {
      golsInstancia = partida.golsTimeA;
      golsAdversario = partida.golsTimeB;
    } else if (this.sigla === partida.siglaTimeB) {
      golsInstancia = partida.golsTimeB;
      golsAdversario = partida.golsTimeA;
    } else {
      return;
    }

    if (golsInstancia > golsAdversario) {
      this.vitorias++;
    } else if (golsInstancia < golsAdversario) {
      this.derrotas++;
    } else {
      this.empates++;
    }

    this.golsMarcados += golsInstancia;
    this.golsSofridos += golsAdversario;
  }

  exibirSituacao() {
    const pontos = this.vitorias * 3 + this.empates;
    console.log(this);
    console.log(`Pontos: ${pontos}`);
  }
}
