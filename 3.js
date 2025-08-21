// Crie uma função anônima atribuída a uma constante maiorNumero 
// que receba um array e retorne o maior valor.
let maior = null;
const maiorNumero = function (...valores) {
  maior = Math.max(...valores);
  return maior;
};
console.log(maiorNumero(5, 6, 19));