function random(min, max) {
  const r = Math.random() * (max - min);
  return Math.floor(r);
}

let rand = 10;

while (rand !== 10) { // Checa primeiro a condição para depois executar
  rand = random(1,20);
  console.log(rand);
}

console.log("-------------");

do { // Vai executar primeiro e checar a condição depois
  rand = random(1,20);
  console.log(rand);
} while (rand !== 10);
