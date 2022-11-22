// const numeros = [100, 287, 308, 4000, 599, 600, 700, 800, 900];
// let [primeiro, segundo, terceiro,quarto,...rest] = numeros;

// let [primeiro, ,três, , cinco, ,sete] = numeros;

// console.log(primeiro,três,cinco,sete);

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [,[,,seis]] = numeros
console.log(seis)

const [lista1, lista2, lista3] = numeros;
console.log(lista1[1])
