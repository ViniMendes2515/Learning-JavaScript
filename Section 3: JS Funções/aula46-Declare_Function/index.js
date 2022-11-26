// Declaração de função (hoisting)
const { lookup } = require("dns");

function falaOi() {
  console.log("Oi");
}

// First-class objects (Objetos de primeira classe)
// Trata a função como dado (Function expression)
const dado = function () {
  console.log("Sou um dado.");
};

// Arrow functions
const arrow = () => {
  console.log("Sou uma arrow function");
};

// Dentro de um objeto pode ter uma função
const obj = {
  falar: function () {
    console.log("Estou falando");
  },
  falar2() {
    console.log("Estou falando");
  },
};

obj.falar();
obj.falar2();