function* geradora1() {
  //Código qualquer ...
  yield "Valor 1"; // A primeira vez que chamar a função retorna o valor 1 e assim por diante
  // Ele 'pausa' a função

  //Código qualquer ...
  yield "Valor 2";
  //Código qualquer ...
  yield "Valor 3";
}

const g1 = geradora1();

/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
*/

for (let i of g1) {
  console.log(i);
}

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

/*
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
*/

for (let u of g2) {
  console.log(u);
  if (u === 20) break;
}

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3(); // delegou parte da tarefa da geradora3 para geradora4
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}

function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  // ...

  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();