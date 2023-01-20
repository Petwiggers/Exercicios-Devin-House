function concatenaArrey(arrey1, arrey2) {
  const array = [...arrey1, ...arrey2];
  return array;
}

console.log(concatenaArrey([1, 2, 3], [4, 5, 6]));
