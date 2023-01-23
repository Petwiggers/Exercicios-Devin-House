/*Para fazer esta arrow function mais curta com objetos
devo colocar o parenteses, caso contrario o interpretador entende que as
chaves do objeto são as chaves da função*/
const mesclaObjetos = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const novoObjeto = mesclaObjetos(obj1, obj2);
console.log(novoObjeto);
