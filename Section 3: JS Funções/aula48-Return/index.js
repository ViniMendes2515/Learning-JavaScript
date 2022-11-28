//return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criaPessoa("Vinicius", "Mendes");
const p2 = {
  nome: "João",
  sobrenome: "Oliveira",
};

console.log(p1);
console.log(p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return `${comeco} ${resto}`;
  }
  return falaResto; // Quando retorna a funcao sem executa-lá você retorna a função em si
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

function criaMultiplicador(multiplicador) {
  return function (n) { // Já retorna criando a função
    return n * multiplicador;
  };
  /*
    function multiplicacao(n){
        return n * multiplicador
    }
    return multiplicacao
    */
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(5))
console.log(triplica(5))
console.log(quadriplica(5))

