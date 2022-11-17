// IEEE 754-2008 -> Padrão de conta do JS
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1

num1 = Number(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))

// console.log(num1.toString() + num2); -> Transforma o Number em String
// num1 = num1.toString(2); -> Mostra o número em Binário
// console.log(num1.toFixed(2)); -> Fixar casas decimais
// console.log(Number.isInteger(num1)); -> Retorna verdadeiro ou falso, numInteiro= True, numFloat = False

// let temp =num1 * 'ola'
// console.log(Number.isNaN(temp)) -> Retorna verdadeiro ou falso, se a conta der NaN(Not a number) = verdadeiro /se não = False
