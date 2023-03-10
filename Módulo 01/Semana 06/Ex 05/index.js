//Função assíncrona com Promisse
// function obterClienteNoBancoDeDados(idCliente) {
//   return new Promise((resolve, reject) => {
//     const cliente = { nome: 'bruce wayne', id: idCliente };
//     resolve(cliente);
//   });
// }

// function processar() {
//   obterClienteNoBancoDeDados(7).then((cliente) => console.log(cliente));
// }

// processar();

//Função assíncrona com Async Await
async function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
  });
}

async function processar() {
  try {
    const cliente = await obterClienteNoBancoDeDados(7);
    console.log(cliente);
  } catch (error) {
    console.log(error);
  }
}

processar();
