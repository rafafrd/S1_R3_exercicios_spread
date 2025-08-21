numeros = [5, 10, 20, 50, 34]

const somaQuadrados = function (...valores) {
  let quadrados = [];
  for (let i = 0; i < valores.length; i++) {
    quadrados[i] = valores[i] * valores[i];
  };
  return quadrados;
}

console.log(somaQuadrados(...numeros));