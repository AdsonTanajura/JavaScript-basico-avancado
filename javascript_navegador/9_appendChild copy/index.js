const novoElemento = document.createElement("p");
const texto = document.createTextNode('Algun texto');

novoElemento.appendChild(texto);

const p = document.querySelector('#paragrafo-principal');
const pai = p.parentNode;

pai.appendChild(novoElemento);