//Captura o evento de submit do form
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Captura os dados do input
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");
  //pega os VALORES do input
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //Se o peso não for avaliado como verdadeiro
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }
  //Se a altura não for avaliada como verdadeiro
  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  //Pega o calculo IMC da função
  const imc = getImc(peso, altura);
  //Pega o nivel do IMC da função
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
});

//Função que calcula o nivel do IMC
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

//Função que calcula o IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//Função que cria um parágrafo
function criaP() {
  const p = document.createElement("p");
  return p;
}

//Função que mostra o resultado na tela
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  //Altera o background do texto
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
