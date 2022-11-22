const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {
  if (i === 2) {
    continue; // A palavra continue vai retornar para o começo do laço sem executar o código abaixo
  }

  if (i === 7) {
    console.log("7 encontrado, saindo");
    break; // Termina o laço e não executa mais nenhuma iteração
  }

  console.log(i);
}

let i = 0;
do {
  if (i === 2) {
    i++; // Deve colocar o i++ antes da palavra continue para não cair no loop infinito
    continue; // A palavra continue vai retornar para o começo do laço sem executar o código abaixo
  }

  if (i === 7) {
    console.log("7 encontrado, saindo...");
    break; // Termina o laço e não executa mais nenhuma iteração
  }
  console.log(i);
  i++;
} while (i < numeros.length);
