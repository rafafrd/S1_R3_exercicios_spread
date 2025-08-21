// 1. Crie uma função tradicional chamada contarVogais(texto) 
// que conte e retorne quantas vogais existem em uma string fornecida pelo usuário, 
// a digitação deve ser realizada pelo terminal.
// usando ... (spread)

const promptSync = require('prompt-sync')();

let frase = promptSync("Digite sua frase: ");
function contarVogais(texto) {
  let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I','O','U'];
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < vogais.length; j++) {
      if (frase[i] == (vogais[j])) {
      contador++;
      }
    }
  }
  return contador;
}

console.log(contarVogais(frase));
