const inputTarefa = document.querySelector(".inputNovaTarefa");
const buttonTarefa = document.querySelector(".addTarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

const limpaInput = () => {
  inputTarefa.value = "";
};

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

//Adiciona um evento de tecla
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

buttonTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
  }
  salvarTarefas();
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    //Substitui a palavra apagar por ''
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  //Converte um elemento em string no formato JSON
  const tarefasJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJson);
}

function adicionaTarefasSalvar() {
  const tarefas = localStorage.getItem("tarefas");
  //Converte novamente para um array
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas){
    criaTarefa(tarefa)
  }
}

adicionaTarefasSalvar();
