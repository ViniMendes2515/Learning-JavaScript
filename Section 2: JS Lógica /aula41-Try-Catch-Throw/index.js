// try {
//   console.log(naoExisto);
// } catch (error) {
//   console.log("naoExisto não existe.");
//   console.log(error); // O erro fica armazenado na variável error
// }

const soma = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X e Y precisam ser números");
  }

  return x + y;
};

try {
  console.log(soma(5, 1));
  console.log(soma(5, "1"));
} catch (error) {
  //console.log(error) -> Não apresentar o erro para o usuário pois pode haver algumas infos sobre o programa
  console.log("Deu erro amigo:(");
}
