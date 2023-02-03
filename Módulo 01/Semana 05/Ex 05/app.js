console.log('Exercicio 05');

import Polígono from './CalculadoraDeArea.js';

const triangulo = new Polígono('triangulo', 6, 8);
const retangulo = new Polígono('retangulo', 4, 6);
const quadrado = new Polígono('quadrado', 4, 4);

const areaTriangulo = triangulo.calcular();
const areaRetangulo = retangulo.calcular();
const areaQuadrado = quadrado.calcular();

console.log('A areá do quadrado é de ' + areaQuadrado + ' cm');
console.log('A areá do retângulo é de ' + areaRetangulo + ' cm');
console.log('A areá do triângulo é de ' + areaTriangulo + ' cm');
