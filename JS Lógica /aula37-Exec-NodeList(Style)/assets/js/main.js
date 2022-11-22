const body = document.body;

const paragrafos = document.querySelector(".paragrafos");
const allParagrafos = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(body);

const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of allParagrafos) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#ffffff';
}
