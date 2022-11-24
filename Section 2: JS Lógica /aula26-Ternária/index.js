// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
// Funciona como apenas um IF e Else

const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'
const corUsuario = null
const corPadrao = corUsuario || 'Verde'

console.log(nivelUsuario,corPadrao)

 