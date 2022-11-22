const frutas = ['Maça','Banana','Uva','Abacaxi','Pera'];
const pessoa = {
    Nome: 'Vinicius',
    Sobrenome: 'Mendes',
    Idade: 18
}

const chave = 'Nome'
console.log(pessoa['Nome'])
console.log(pessoa[chave])

console.log('------------------')
/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
*/

//# For in -> lê os índices ou chaves do objeto

for (let fruta in frutas){
    console.log(frutas[fruta])
}

console.log('------------------')

for (let key in pessoa){
    console.log(`${key}: ${pessoa[key]}`)
}


