// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) { // Separa o nome em um array e atribui o nome ao primeiro valor e o resto ao sobrenome
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala: function (assunto) {
      // Quando a função esta dentro do objeto é chamado de metodo
      // A palavra this se refere a pessoa que chamou o objeto
      return `${this.nome} está ${assunto} com ${this.peso}kg`;
    },
    altura: altura,
    peso: peso,
    get imc() {
      // O get transforma a função em um atributo
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Vini", "Mendes", 1.7, 70);
const p2 = criaPessoa("Luiz", "Mario", 1.8, 90);

p1.nomeCompleto = "Marcio Gama Junior";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);

console.log(`${p1.nomeCompleto} ta com o IMC de ${p1.imc}`);
console.log(p1.fala("falando sobre JS")); //Agora o this assume o valor de p1
console.log(p2.fala("falando sobre JS")); //Agora o this assume o valor de p2
