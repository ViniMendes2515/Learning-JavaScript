const pessoa = {
  nome: "Vinicius",
  sobrenome: "Mendes",
  idade: 18,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
  estado: 'Minas Gerais',
  estadoCivil: 'Casado',
};

//Atribuição via desestruturação
const {
  nome,
  sobrenome,
  idade,
  endereco: { rua = 'BDL', numero },
  ...rest
} = pessoa;
console.log(
  `Olá ${nome} ${sobrenome} você tem ${idade} anos e mora no(a) ${rua} ${numero}`
);

console.log(rest)
