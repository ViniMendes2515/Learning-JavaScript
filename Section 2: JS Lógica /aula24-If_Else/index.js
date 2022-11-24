let hora = 40;

if (hora <= 11) {
  console.log("Bom dia"); 
} else if (hora >= 12 && hora <= 17){
    console.log("Boa Tarde");
} else if (hora >= 17 && hora <= 23){
    console.log("Boa noite");
} 
else{
    console.log("Deu problema!");
}

let numero = 12;

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5");
} else if (numero >= 6 && numero <= 10) {
  console.log("O número está entre 6 e 10");
} else if (numero > 10 && numero <= 11) {
  console.log("O número está entre 10 e 11");
} 
else {
  console.log("O número não está entre 0 e 11");
}