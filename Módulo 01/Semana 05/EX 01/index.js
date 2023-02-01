import Funcionario from './funcionario.js';

const ada = new Funcionario('528.442.040-31', 'Ada Lovelace', 1000);
alert(`Seu salario :${ada.salario}`); // 1000
ada.promover(50);
alert(` Seu salário com a promoção : ${ada.salario}`); // 1500
