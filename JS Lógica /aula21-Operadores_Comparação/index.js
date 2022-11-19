/*
# Operadores de comparação
  
  > maior que
  >= maior que ou igual a
  < menor que
  <= menor que ou igual a
  == igualdade (valor)
  === igualdade estrita (valor e tipo)
  != diferente (valor)
  != diferente estrito (valor e tipo)
   
*/

const num1 = 10; //number
const num2 = '10'; //string
const comp1 = num1 === num2; //Não usar == pois não deduz o tipo da variável
console.log(comp1)

const num3 = 15; //number
const num4 = '15'; //string
const comp2 = num3 !== num4; //Não usar != pois não deduz o tipo da variável
console.log(comp2)
