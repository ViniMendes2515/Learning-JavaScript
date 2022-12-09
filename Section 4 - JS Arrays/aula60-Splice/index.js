//                -5         -4       -3        -2       -1
//                 0          1        2         3        4
const nomes = ["Vinicius", "Joao", "Eduardo", "Mário", "Moacir"];
const nomes2 = [...nomes];
const nomes3 = [...nomes2];

//nomes.splice(índice, quantos elementos que quero remover, adicionar elemento)

let removidos = nomes.splice(-4, Number.MAX_VALUE /*Vai até o final do array*/); //* Retorna um array quando remove
console.log(nomes, removidos);

//nomes2.splice(3,0,'Luiz') // Adiciona 'Luiz' no indice 3
const removeAdd = nomes2.splice(3,2,'Luiz','Otavio') // Remove 'Mário' e 'Moacir' e adiciona 'Luiz' e 'Otavio' no indice 3
console.log(nomes2,removeAdd)

// Push
nomes.splice(nomes.length,0,'Luiz')
console.log(nomes)

// Unshift
nomes.splice(0,0,'Maria')
console.log(nomes)