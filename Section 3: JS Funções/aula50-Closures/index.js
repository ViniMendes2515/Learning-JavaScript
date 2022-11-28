// Global
function retornaFuncao(nome) { // Mãe
  return function () { // A função tem acesso a 3 escopos(A mãe dela, dela e do global)
    return nome // Dela
  };
}
// Closure é a habilidade de acessar seu escopo léxico

const funcao = retornaFuncao('Vinicius'); // Fechando o escopo com Closure com nome sendo Vinicius
const funcao2 = retornaFuncao('João'); // Fechando o escopo com Closure com nome sendo João
console.log(funcao)
console.log(funcao2)
console.log(funcao(), funcao2())
