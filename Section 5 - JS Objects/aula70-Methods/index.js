/*
Object.values (retorna os valores)
Object.entries (retorna a chave e o valor)
Object.assign(destino, any)
Object.getOwnPropertyDescriptor(o, 'prop')
|-> Mostra as propriedades do objeto
...(spread)

// Já estudado
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperty (defini uma propriedade)
Object.defineProperties (defini várias propriedades)
*/

const produto = {nome: 'Caneca', preco: 2}
const produto2 = {
    ...produto,
    material:'Papel'
}

// assign é semelhante ao spread
const produto3 = Object.assign({}, produto, {segmento: 'industrial'})

produto2.nome = 'Cigarro'
console.log(produto)
console.log(produto2)
console.log(produto3)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))




//console.log(Object.values(produto3))
//console.log(Object.entries(produto3))