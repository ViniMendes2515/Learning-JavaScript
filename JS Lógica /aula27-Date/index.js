// const time = 60 * 60 * 3 * 1000; -> Três horas em milesimos de segundo
// const oneDay = 60 * 60 * 24 * 1000; -> Um dia em milesimos de segundo
// const data = new Date(0 + time + oneDay); // 01/01/1970 Timestamp unix ou época Unix

const data = new Date(2004, 0, 4,14,34,11); // Ano, Mês, Dia, Hora, Minuto, Segundo, Milesimo

// console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sábado
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1) //Mês começa do 0
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minuto', data.getMinutes())
// console.log('Segundo', data.getSeconds())

// console.log(data.toString())

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  function semanaExtenso(num) {
    let semana = [
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo",
    ];

    if (num === 0) return semana[6];
    if (num === 1) return semana[0];
    if (num === 2) return semana[1];
    if (num === 3) return semana[2];
    if (num === 4) return semana[3];
    if (num === 5) return semana[4];
    if (num === 6) return semana[5];
  }

  const diaSemana = semanaExtenso(data.getDay());
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${diaSemana}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil.toString());
