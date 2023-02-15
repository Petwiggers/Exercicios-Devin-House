console.log('Olá Mundo !!');

function sleep(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(valor), 3000);
  });
}

sleep(3).then((res) => console.log(res));
