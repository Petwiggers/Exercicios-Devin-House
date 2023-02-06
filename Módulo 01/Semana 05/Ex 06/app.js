console.log('Ex 06');

import Aplicacao from './Juros.js';

const aplicacao1 = new Aplicacao(10000, 0.07, 24);
console.log(aplicacao1.calcularJurosSimples());
console.log(aplicacao1.calcularJurosCompostos());
console.log('----------');
const aplicacao2 = new Aplicacao(10000, 0.15, 10);
console.log(aplicacao2.calcularJurosSimples());
console.log(aplicacao2.calcularJurosCompostos());
