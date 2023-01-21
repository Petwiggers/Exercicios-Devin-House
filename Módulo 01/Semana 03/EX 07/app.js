const destructuring = ({ nome, idade, profissao }) => {
  console.log('Esta é ' + nome + ', tem ' + idade + ' anos e é ' + profissao + '.');
};

const ada = {
  nome: 'Ada',
  idade: 36,
  profissao: 'Matemática',
};

const mensagem = destructuring(ada);
