// A função definida com a palavra function tem uma palavra especial 'arguments'
function funcao() {
  // A variável arguments sustenta todos os argumentos passados na função
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3, 4);

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}

funcao3(1, undefined, 20); //Para que a variavel assuma o valor padrao deve colocar undefined(não é uma boa pratica)

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Vinicius", sobrenome: "Mendes", idade: 18 };
funcao4(obj);
//funcao4({nome:'Vinicius', sobrenome: 'Mendes',idade: 18}) -> Pode passar o objeto direto no argumento

function funcao5([v1, v2, v3]) {
  console.log(v1, v2, v3);
}

let arr = ["Vini", "Mendes", 18];
funcao5(arr);
//funcao5(['Vini', 'Mendes', 18]) -> Pode passar o array direto no argumento

function conta(operador, acumulador, ...numeros) { // Todo o resto depois de acumulador vai ser numeros (...)
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
}

conta("+", 1, 30, 40, 50);

const conta2 = function (operador, acumulador, ...numeros){
    console.log(arguments)
}

conta2('+',1,30,40,50)

const argumento = (...args) => { //Para capturar os argumentos passados
    console.log(args)
}
argumento('+',1,30,40,50)