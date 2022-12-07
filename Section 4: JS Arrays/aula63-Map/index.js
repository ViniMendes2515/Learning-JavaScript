// Map -> Altera os valores do array(não o original), sempre ter o mesmo tamanho
// Semelhante ao Filter com relação aos parametros(valor,indice,array)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((valor) => valor * 2);

console.log(dobro);

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

const nomes = pessoas.map((obj) => obj.nome); // Mostra o nome em string
const idades = pessoas.map((obj) => ({ idade: obj.idade })); //Remove a chave nome
// Adiciona um ID no obj(Adiciona um ID no obj original, por isso criei um newObj para deixar intacto o original)
const IDs = pessoas.map((obj) => {
  const newObj = { ...obj };
  newObj.ID = Math.floor(Math.random() * 65536);
  return newObj;
});

console.log(nomes);
console.log(idades);
console.log(IDs);
