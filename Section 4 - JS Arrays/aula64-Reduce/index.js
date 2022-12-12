// Some todos os números
// Retorne um array com os pares(Filter)
// Retorne um array com o dobro dos valores(Map)
// Reduce -> Reduz o array para um unico valor

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtrados = numeros.filter((valor) => valor % 2 === 0);
const dobro = numeros.map((valor) => valor * 2);

const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
}, 0 /*Valor do acumulador(Opcional)*/);

const filtradosReduce = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); // Muito mais facil usar o Filter

const dobroReduce = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []); // Muito mais facil usar o Map

console.log(filtrados);
console.log(dobro);

console.log(total);
console.log(filtradosReduce);
console.log(dobroReduce);

const pessoas = [
  { nome: "Vinicius", idade: 18 },
  { nome: "Mario", idade: 24 },
  { nome: "Mary", idade: 21 },
  { nome: "Marcos", idade: 63 },
  { nome: "Kleitonmba", idade: 12 },
  { nome: "Joao Kleber", idade: 78 },
  { nome: "Moacir", idade: 100 },
  { nome: "Ana", idade: 13 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha)
