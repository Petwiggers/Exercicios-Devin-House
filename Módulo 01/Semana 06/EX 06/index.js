const obterIdadeMedia = async (nome) => {
  const url = `https://api.agify.io/?country_id=BR&name=${nome}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const formulario = document.getElementById('form');
formulario.addEventListener('submit', async (event) => {
  event.preventDefault();
  const resultado = document.getElementById('resultado');
  resultado.innerText = 'Processando ...';
  const nome = event.target.nome.value;
  const data = await obterIdadeMedia(nome);
  if (data) {
    resultado.innerText = `A idade média é de: ${data.age} anos`;
    return;
  }
  resultado.innerText = 'Falha ao Buscar infromações!';
});
