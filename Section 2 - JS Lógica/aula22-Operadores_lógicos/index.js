/*
   Operadores Lógicos

*    && -> AND -> E = Todas as expressões precisam ser verdadeira para retornar true
*    || -> OR -> OU = Só um valor da expressão precisa ser verdadeiro para retornar true
*    ! -> NOT -> NÃO
*/


const num1 = 10;
const sol = 'sol'

let expressaoAnd = num1 === 10 && sol === 'sol'; //(True && True) retorna verdadeiro
let expressaoOr = num1 === 15 || sol === 'sol'; //(False || True) retorna verdadeiro

console.log(expressaoAnd)
console.log(expressaoOr)
console.log(!true) // o ! nega o valor(invertendo ele)


const usuario = "Luiz"; //Form usuário
const senha = "1234"; //Senha usuário

const login = usuario === "Luiz" && senha === "1234";
console.log(" ")
console.log(login);
