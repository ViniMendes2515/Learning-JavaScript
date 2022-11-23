const date = () => {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
};


const timer = setInterval(function (){
    console.log(date())
},1000);

const stop = setTimeout(function (){
    clearInterval(timer)
},3000)

setTimeout(function (){
    clearInterval(timer)
    console.log('Olá mundo')
},5000)
