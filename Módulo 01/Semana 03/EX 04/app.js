const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const novoObjeto = mesclaObjetos(obj1, obj2);
console.log(novoObjeto);

function mesclaObjetos(obj1, obj2) {
  const objNovo = { ...obj1, ...obj2 };
  return objNovo;
}
