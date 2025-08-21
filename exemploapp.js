// O spread operator em Js é representado por ... e serve para espalhar (ou expandir)
// os elementos de um array, objeto ou iterável em outro contexto.

// const arrayCentral = [3, 4];
// const array = [1, 2, ...arrayCentral, 5, 6];
// console.log(array)

// =================================================================================================

// const array = ['a', 'b', 'c']; 
// const array2 = [...array];              //funciona
// array2.push('d')
// console.log(array)
// console.log(array2);

// =================================================================================================

// const mensagem = "Olá";
// const caracteres = [...mensagem];
// console.log(caracteres);

// =================================================================================================

// function soma(num1, num2) {
//   return num1 + num2;
// }                                    forma tradicional
// console.log(soma(2, 2));

function soma(...valores) {
  // console.log(valores + valores);
  let result=0;
  for (let i = 0; i < valores.length; i++) {
    result += valores[i];
  }
  return result;
}
console.log(soma(4,3,2,21))