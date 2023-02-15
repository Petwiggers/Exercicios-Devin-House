const funcaoHora = () => {
  const interval = setInterval(() => {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleTimeString('pt-br');
    console.log(dataFormatada);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
};

funcaoHora();

// const data = new Date();
// console.log(data);
// const formatData = data.toLocaleTimeString();
// console.log(formatData);
