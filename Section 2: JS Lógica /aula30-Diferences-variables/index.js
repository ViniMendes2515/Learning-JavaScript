const verdadeira = false;

// Let tem escopo de bloco { ...  bloco}
// Var só tem escopo de função

let nome = "Luiz"; // Criando
var nome2 = "Luiz"; // Criando

var nome2 = "Otávio";


console.log(nome, nome2);

if (verdadeira) {
  let nome = "Otávio"; // Criando
  var nome2 = "Rogério"; // Redeclarada
  console.log(nome, nome2);

  if (verdadeira) {
    var nome2 = "Otávio"; // Redeclarada
    let nome = "Vinicius"; // Criando
    console.log(nome, nome2);
  }
}

function falaOI() {
  var nome = "Vinicius";
  console.log(`Oi ${nome} ${sobrenome}`);
}

falaOI("Luiz");

console.log(sobrenome)

var sobrenome = 'Mendes' //O JS faz o hosting, eleva as variáveis escritar com var para serem declaradas depois