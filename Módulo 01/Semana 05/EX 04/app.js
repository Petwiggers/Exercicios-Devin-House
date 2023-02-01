import Animal, { Cachorro, Gato } from './Animal.js';
const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy.som); // "latido"
const frajola = new Gato('frajola', 8);
console.log(frajola.som); // "miado"

console.log(snoopy);
console.log(frajola);
