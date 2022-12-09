const nomes = ["Vinicius Mendes", "Augusto Mendes", "Juliana Mendes"];

//! For clássico - Geralmente com iteráveis(array ou strings)
//! For in - Retorna o índice ou chave (string, array ou objetos)
//! For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nomes.length; i++) {
  console.log(`${nomes[i]} tem o índice ${i}`);
}

console.log("---------------");

for (let i in nomes) {
  console.log(`${nomes[i]} tem o índice ${i}`);
}

console.log("---------------");

// Retorna o valor direto
for (let value of nomes) {
  console.log(value);
}

console.log("---------------");

// For como uma função
nomes.forEach(function (value, i){
    console.log(value, i)
});
