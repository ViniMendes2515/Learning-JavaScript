const nome = "Vinicius";

function falaNome() {
  const nome = "Luiz";
  console.log(nome); // A função consegue acessar seus vizinhos
}

function usaFalaNome() {
  const nome = "Mendes";
  falaNome(); // A função lembra quando ela foi declarada e os vizinhos dela
}

usaFalaNome();
