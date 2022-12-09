//# Forma clássica de declarar Função

function soma(valor1 = 0, valor2 = 0) {
  const resultado = valor1 + valor2;
  return resultado;
}

console.log(soma());


//# Função Anônima(dentro da variável)

const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(25))
console.log(raiz(18))


//# Arrow Function

const raizQ = (n) => n ** 0.5;

console.log(raizQ(25))
console.log(raizQ(18))
