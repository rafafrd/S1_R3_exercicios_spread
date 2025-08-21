// Crie uma função anônima atribuída a uma constante chamada dobrar 
// que receba um array de números e retorne um novo array com todos os valores dobrados.
numeros = [5, 10, 20, 50, 34]

const somar = function (...valores) {
  let dobrados = [];
  for (let i = 0; i < valores.length; i++) {
    dobrados[i] = valores[i] * 2;
  };
  return dobrados;
};

console.log(somar(...numeros))