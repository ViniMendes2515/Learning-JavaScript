// let umaString = "um \"Texto\""; 
// '\' --> considera como um caractere 

let umaString = 'um texto';

//Concatenação
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(' ')

//Apresenta o índice
console.log(umaString.indexOf('o', 3 /*posição*/ ));
console.log(umaString.lastIndexOf('o'));

console.log(' ')

//Aceita expressões regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));

umaString = 'O rato roeu a roupa do rei de roma'
console.log(' ')

//Substitui uma letra ou palavra na String
console.log(umaString.replace(/rato/g, 'pato'))

console.log(' ')

//Conta quantos caracteres tem na String
console.log(umaString.length)

console.log(' ')

//Decide de onde começa a String e onde termina
console.log(umaString.slice(2,6))
console.log(umaString.substring(umaString.length -6, umaString.length -1))

console.log(' ')

//Dividir a String baseado em um caractere qualquer(Transforma em um Array)
console.log(umaString.split(' ', 2))

console.log(' ')

//Colocar String em Maiúsculo e Minusculo
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())


