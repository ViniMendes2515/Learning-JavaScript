// Filter -> Filtra o array, sempre retorna um array com a mesma quantidade de elementos ou menos

//Retornar os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtrados = numeros.filter((valor) => valor > 10);
console.log(filtrados);

/* Forma Verbosa
function callbackFilter(valor, indice, array) {
// O método filter já recebe esses parâmetros(não precisa co locar, só se quiser pegar o valor desses parametros)
  return valor > 10;
}
*/

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

const pessoasNomeGrande = pessoas.filter((valor) => valor.nome.length >= 8);
const pessoasVelhas = pessoas.filter((valor) => valor.idade >= 50);
const pessoasTerminadaComA = pessoas.filter((valor) => valor.nome.toLowerCase().endsWith('a'));

console.log(pessoasNomeGrande);
console.log(pessoasVelhas);
console.log(pessoasTerminadaComA);
