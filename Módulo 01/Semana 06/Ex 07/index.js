const urlInicial = 'https://rickandmortyapi.com/api/character';
const obterPersonagens = async (url = urlInicial) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const lista = document.getElementById('lista');

const atualizaPaginacao = (info) => {
  const anterior = document.getElementById('anterior');
  const proximo = document.getElementById('proximo');

  if (info.prev) {
    anterior.onclick = async () => {
      const data = await obterPersonagens(info.priv);
      montaHtml(data);
    };
    anterior.disabled = false;
  } else {
    anterior.disabled = true;
  }

  if (info.next) {
    proximo.onclick = async () => {
      const data = await obterPersonagens(info.next);
      montaHtml(data);
    };
    proximo.disabled = false;
  } else {
    proximo.disabled = true;
  }
};

const montaHtml = (data) => {
  lista.innerHTML = '';
  data.results.forEach((personagem) => {
    const item = document.createElement('li');
    const titulo = document.createElement('h2');
    const imagem = document.createElement('img');

    titulo.innerText = personagem.name;

    imagem.src = personagem.image;

    item.classList.add('itemLista');

    item.appendChild(imagem);
    item.appendChild(titulo);
    lista.appendChild(item);
  });

  atualizaPaginacao(data.info);
};

window.addEventListener('load', async () => {
  const data = await obterPersonagens();

  if (data) {
    montaHtml(data);
    return;
  }
  const item = document.createElement('li');
  item.innerHTML = 'Falha ao obter os dados!';
  lista.appendChild(item);
});
