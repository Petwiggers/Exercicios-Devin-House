import Fatura from './fatura.js';

const melao = new Fatura(123, 'Melão', 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6
console.log(melao.ValorTotal);
