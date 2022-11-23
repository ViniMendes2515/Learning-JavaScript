try {
  // É executao quando não há erros
  console.log("Abri o arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("Deu erro");
  } finally {
    console.log("Também sou finally");
  }
} catch (erro) {
  // É executao quando há erros
  console.log("Tradando o erro");
} finally {
  //Sempre é executado
  console.log("Finally: Eu sempre sou executado");
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperano instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

try {
  const data = new Date();
  const hora = retornaHora(data);
  console.log(hora);
} catch (e) {
  //Tratar erro
} finally{
  console.log('Tenha um bom dia')
}
