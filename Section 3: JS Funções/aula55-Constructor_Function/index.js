// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> deve começar com maisculo Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos Privados
  const ID = 1421;

  const metodoInterno = function () {};

  // Atributos públicos(this)
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(`Oi ${nome}`);
  };
}

// Não pode esquecer o new
// New cria um objeto vazio e o this aponta para ele e retorna esse objeto para a variavel
const p1 = new Pessoa("Vinicius", "Mendes");
const p2 = new Pessoa("Luiz", "Marciano");

p1.metodo();
