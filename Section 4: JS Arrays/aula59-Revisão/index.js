// Valor por referência(Aponta para o mesmo valor)
const nomes = ['Eduardo','Maria','Vinicius'] // Array Literal
const novo = [...nomes] // Para singularizar o valor deve-se usar o spreat

// Funciona com String, Objetos, Funções, Números
const Nomes = new Array('Eduardo','Maria','Vinicius') // Array Construtor

delete Nomes[2]; // Deleta o valor mas não o indice

nomes.push('Marcos') // Adiciona no final
nomes.unshift('Wallace') // Adiciona no começo
 
const slice = novo.slice(1,3)
console.log(nomes)

console.log(slice)

const nome = 'Vinicius Mendes Castro'
const array = nome.split(' ')
console.log(array)