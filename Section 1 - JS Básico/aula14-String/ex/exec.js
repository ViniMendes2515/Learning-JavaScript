let nomeUser = window.prompt("Digite seu nome completo: ");

document.body.innerHTML += `Seu nome é: <strong>${nomeUser}</strong> <br/>`
document.body.innerHTML += `Seu nome tem <strong>${nomeUser.length}</strong> letras  <br/>`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nomeUser[1]}</strong> <br/>`

document.body.innerHTML += `O primeiro índice da letra a no seu nome é: <strong>${nomeUser.indexOf('a')}</strong> <br/>`
document.body.innerHTML += `O último índice da letra a no seu nome é: <strong>${nomeUser.lastIndexOf('a')}</strong> <br/>`

document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nomeUser.slice(-3)}</strong> <br/>`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nomeUser.split(' ')}</strong> <br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nomeUser.toUpperCase()}</strong> <br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nomeUser.toLowerCase()}</strong> <br/>`