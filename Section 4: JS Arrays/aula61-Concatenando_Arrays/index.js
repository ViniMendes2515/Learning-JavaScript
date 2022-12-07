const a1 = [1,2,3,]
const a2 = [4,5,6,]
const a3 = [7,8,9,]
console.log(a4)
// Usando o concat
const a4 = a1.concat(a2,a3)
console.log(a4)

//...rest -> ...spread (pega os valores dos arrays)
const a5 = [...a1,...a2,...a3,...[10,11,12]]
console.log(a5)