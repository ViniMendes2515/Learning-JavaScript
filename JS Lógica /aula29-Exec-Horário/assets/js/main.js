const h1 = document.querySelector(".horario");
const data = new Date();

const diaNum = data.getDate();
const diaSemana = data.getDay();
const mes = data.getMonth();
const year = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const sec = data.getSeconds();

//Funções simplificadas
function getDiaSemanaTexto(diaSemana) {
  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return diasSemana[diaSemana];
}
function getNomeMes(mes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses[mes];
}

//Funções maiores

//# function getDiaSemana(diaSemana) {
//    let extenso;
//    switch (diaSemana) {
//      case 0:
//        extenso = "Domingo";
//        return extenso;
//      case 1:
//        extenso = "Segunda-feira";
//        return extenso;
//      case 2:
//        extenso = "Terça-feira";
//        return extenso;
//      case 3:
//        extenso = "Quarta-feira";
//        return extenso;
//      case 4:
//        extenso = "Quinta-feira";
//        return extenso;
//      case 5:
//        extenso = "Sexta-feira";
//        return extenso;
//      case 6:
//        extenso = "Sábado";
//        return extenso;
//      default:
//        extenso = "?";
//        return extenso;
//    }
//  }

//# function getMes(mes) {
//    let extenso;
//    switch (mes) {
//      case 0:
//        extenso = "Janeiro";
//        return extenso;
//      case 1:
//        extenso = "Fevereiro";
//        return extenso;
//      case 2:
//        extenso = "Março";
//        return extenso;
//      case 3:
//        extenso = "Abril";
//        return extenso;
//      case 4:
//        extenso = "Maio";
//        return extenso;
//      case 5:
//        extenso = "Junho";
//        return extenso;
//      case 6:
//        extenso = "Julho";
//        return extenso;
//      case 7:
//        extenso = "Agosto";
//        return extenso;
//      case 8:
//        extenso = "Setembro";
//        return extenso;
//      case 9:
//        extenso = "Outubro";
//        return extenso;
//      case 10:
//        extenso = "Novembro";
//        return extenso;
//      case 11:
//        extenso = "Dezembro";
//        return extenso;
//      default:
//        extenso = "?";
//        return extenso;
//    }
//  }

const diaEscrito = getDiaSemanaTexto(diaSemana);
const mesEscrito = getNomeMes(mes);
h1.innerHTML = `${diaEscrito}, ${diaNum} de ${mesEscrito} de ${year} <br> ${hora}:${min}:${sec}`;
