/*
&& -> false && true = false "o valor mesmo"
|| -> true || false = vai retornar "o valor verdadeiro"

  FALSY = valores que não são literal mas retorna falso
  *false (literal)
   0
   '' "" ``
   null / undefined
   NaN

*/

function falaOi() {
  return "Oi";
}

//Retorna o último valor caso tudo seja TRUE
console.log(true && falaOi()); //Short-Circuit AND

//Retorna o primeiro valor True que encontrar
//Caso seja tudo falso retorna o último valor False
console.log(0 || "" || null || "Vinicius"); //Short-Circuit OR
 

const corUsuario = null;
const corPadrao = (corUsuario || 'preto')
console.log(corPadrao)