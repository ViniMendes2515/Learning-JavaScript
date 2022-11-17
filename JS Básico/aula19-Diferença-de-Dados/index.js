/*
Primitivos (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor imutável

Referência (Mutável) - Array, Object, Function
*/

let a = 'A';
let b = a; //Copia(Não depende do valor de a posteriormente)

console.log(a,b)

a = 'Outra coisa'
console.log(a,b)


let c = [1,2,3]
let d = c //Aponta para o mesmo local de memória do c (Passados por referencia)
let e = [...c] // Copia o valor de 'c' para 'e' e para de apontar para o mesmo local de memória

console.log(c,d)
c.push(4)
console.log(c,d)
d.pop()
console.log(c,d)

const pessoa = {
    nome:'vinicius',
    sobrenome:'mendes'
}

const pessoa2 = pessoa
pessoa2.nome = 'MIlton'
console.log(pessoa)

const pessoa3 = {...pessoa}
pessoa3.nome = 'Marcio'
console.log(pessoa3)