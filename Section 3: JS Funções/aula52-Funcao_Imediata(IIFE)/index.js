// IIFE -> Immediately invoked function expression

function qualquerCoisa() {
  // Toca o escopo global
  console.log(1234);
}

(function () {
  // Ao colocar os parenteses ela se auto convoca e nao toca o escopo global
  const nome = "Márcio";
  console.log(nome);
})();

(function (idade, peso, altura) {
  function criaNome(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
  }
  function falaNome() {
    return criaNome("Vini", "Mendes");
  }

  console.log(
    `${falaNome()} tem ${idade} anos pesa ${peso}kg e mede ${altura} de altura`
  );
})(18, 69, 1.71);

const nome = "Luiz";
