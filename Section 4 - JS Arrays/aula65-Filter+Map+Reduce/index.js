// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const exp = require("constants");

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosParesVerboso = numeros // Function Normal
  .filter(function (valor) {
    return valor % 2 === 0;
  })
  .map(function (valor) {
    return valor * 2;
  })
  .reduce(function (ac, valor) {
    return (ac += valor);
  });

const numerosPares = numeros // Arrow Function
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => (ac += valor));

// [50, 80, 2, 8, 22] pares
// [100, 160, 4, 16, 44] dobro

console.log(numerosPares);
console.log(numerosParesVerboso);
