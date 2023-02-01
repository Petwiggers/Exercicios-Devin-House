export default class Funcionario {
  cpf;
  nome;
  salario;
  constructor(cpf, nome, salario) {
    const vetorSalario = [...cpf];
    if (vetorSalario.length === 14) {
      this.cpf = cpf;
      this.nome = nome;
      this.salario = salario;
    } else {
      alert('Cpf inválido!');
    }
  }

  promover(porcentagem) {
    this.salario += (this.salario * porcentagem) / 100;
  }
}
