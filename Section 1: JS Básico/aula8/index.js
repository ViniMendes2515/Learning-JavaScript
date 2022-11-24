const nome = 'Vinicius';
const sobreNome = 'Mendes Castro';
const altura = 1.70
const idade = 18;
const peso = 70;
let IMC = peso / (altura*altura);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} ${sobreNome} nasceu no ano de ${anoNascimento}`);