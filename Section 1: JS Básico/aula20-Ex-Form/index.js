function escopo() {
  const form = document.querySelector("form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];


  /*
    form.onsubmit = function (evento){
        evento.preventDefault();
        window.alert(1);
        console.log('Foi enviado')
    };
    */
  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const dados = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    pessoas.push(dados)
    console.log(pessoas)

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  }

  form.addEventListener("submit", recebeEventoForm);
}

escopo();
