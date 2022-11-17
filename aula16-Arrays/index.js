const alunos = ['João', 'Maria', 'Luiz'];

console.log(typeof alunos)
console.log(alunos instanceof Array)

// alunos.push('Luíza')
// alunos.push('Eduardo')
// console.log(alunos.slice(0,5))

//* alunos.unshift('Velma') -> Adiciona o valor no começo
//* alunos.push('Lisa') -> Adiciona o valor no final

//* alunos[alunos.length] = 'Lisa' -> Adiciona o valor no array no final
//* alunos[alunos.length] = 'Fábio'
//* alunos[alunos.length] = 'Luana'

//! delete alunos[1] -> Remove o elemento mas não o índice
//! alunos.pop() -> Remove o último elemento
//! alunos.shift() -> Remove o primeiro elemento

//? const lastRemove = alunos.pop() -> Armazena na variável o último elemento removido
//? const begRemove = alunos.shift() -> Armazena na variável o primeiro elemento removido

//# alunos[3] = 'Lisa'; -> Adiciona o valor 
//# alunos[0] = 'Vinicius'; -> Altera o valor do índice 0
