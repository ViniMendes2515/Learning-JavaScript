// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes dignificativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase ex: clienteVip 
// Case-sensitive
// Não pode modificar o valor de uma constante
// NAO UTILIZE VAR, UTILIZE CONST

const nome = 'João';
console.log(nome);

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 3;

console.log(resultadoDuplicado);
console.log(typeof(resultadoDuplicado));