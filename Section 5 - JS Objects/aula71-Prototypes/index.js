/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro

Todos os objetos tem uma referência interna para um protóripo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo(null) até encontrar (ou não) tal membro
*/

// Função construtura -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  /*Sobrescreve o prototype*/ this.nomeCompleto = () =>
    `${this.nome} ${this.sobrenome}`;
}

// Instancia
const pessoa1 = new Pessoa("João", "Mendes"); // <- Pessoa = Função Construtura
const pessoa2 = new Pessoa("Maria", "Lua");
const data = new Date(); // Date = Função Construtura

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(pessoa1);

// Cadeia de motor de procura do JS
// pessoa1 --> Pessoa.prototype --> Object.prototype
