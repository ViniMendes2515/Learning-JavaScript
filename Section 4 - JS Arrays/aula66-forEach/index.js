// Só esta disponivel em Arrays

const a1 = [11,53,34,66,15,26,76,88,91]
let total = 0

a1.forEach((valor,indice,array) =>{
    total += valor 
})

console.log(total)