const pessoa = {
  nome: "vini",
  sobrenome: "mendes",
};

const chave = "nome";

console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa[chave]); // Dinâmico

console.log(" ");

const pessoa1 = new Object();
pessoa1.nome = "Vinicius";
pessoa1.sobrenome = "Mendes";
pessoa1.idade = 18;
pessoa1.getDataNascimento = function () {
  const data = new Date();
  return data.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let key in pessoa1) {
  console.log(pessoa1[key]);
}

console.log(" ");
// Factory function / Constructor functions / Classes

// Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Vinicius", "Mendes");
console.log(p1.nomeCompleto);

console.log(" ");

// Constructor functions
// {} <- atrela o this a esse objeto -> retorna o this
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p2 = new Pessoa("Luiz", "Mário");
Object.freeze(p1); // Trava os valores do objeto
const p3 = new Pessoa("Moacir", "Junior");
console.log(p2);
console.log(p3);
