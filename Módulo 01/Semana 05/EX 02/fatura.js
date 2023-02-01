export default class Fatura {
  id;
  descricao;
  quantia;
  preco;
  constructor(id, descricao, quantia, preco) {
    this.id = id;

    this.descricao = descricao;

    if (quantia > 0) {
      this.quantia = quantia;
    } else {
      this.quantia = 0;
    }

    if (preco > 0) {
      this.preco = preco;
    } else {
      this.preco = 0;
    }
  }

  obterValorTotal() {
    return this.quantia * this.preco;
  }
}
