export default class Juros {
  capitalInicial;
  taxaAplicada;
  tempo;
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  calcularJurosSimples() {
    let montante = this.capitalInicial;
    return Math.round((montante += this.capitalInicial * this.taxaAplicada * this.tempo));
  }

  calcularJurosCompostos() {
    //Math.floor arredonda pra baixo
    //Match.round arredonda para o mais proximo
    //Match.ceil arredonda para cima
    return Math.round(this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo);
  }
}
