/*
   const pessoa1 = {
       nome: 'Vinicius',
       sobrenome: 'Mendes',
       idade: 15
   }
   const pessoa2 = {
       nome: 'Maria',
       sobrenome: 'Castro',
       idade: 45
   }
   console.log(pessoa1.nome)
   console.log(pessoa1.sobrenome)
   console.log(pessoa1.idade)
*/

/*
    #Função que cria pessoa usando Objeto

    function criaPessoa(nome, sobrenome, idade) {
      return { nome, sobrenome, idade };
    }

    const pessoa1 = criaPessoa("Vinicius", "Mendes", 18);
    const pessoa2 = criaPessoa("Maria", "Marlon", 55);
    const pessoa3 = criaPessoa("Marcia", "Judidite", 22);

    console.log(pessoa1.nome, pessoa2.nome);
*/

const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Mendes',
    idade: 18,

    fala(){  
        console.log(`Olá ${this.nome} ${this.sobrenome} você tem ${this.idade} anos`)
    },

    incrementaIdade(){
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();