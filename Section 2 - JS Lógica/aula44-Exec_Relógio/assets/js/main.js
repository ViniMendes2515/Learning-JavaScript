// Não é necessário declarar elas pois usei o e.target
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");

const relogio = document.querySelector(".relogio");

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraSegundos(segundos);
  }, 1000);
}

const criaHoraSegundos = (segundos) => {
  let data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};

// Forma resumida de fazer Event Listener
document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = "00:00:00";
  }
  if (el.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }
  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    iniciaRelogio();
  }
});

//# Formas verbosas para adicionar Evento de click
/* 
? Iniciar relógio
iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("pausado");
  iniciaRelogio();
});
/*

/*
? Pausar relógio
pausar.addEventListener("click", function (event) {
  relogio.classList.add("pausado");
  clearInterval(timer);
});

*/

/*
? Zerar relógio
zerar.addEventListener("click", function (event) {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = "00:00:00";
});

*/
