const novoElemento = document.createElement("p");
const elementoAlvo = document.querySelector('#container-principal h1');
const texto = document.createTextNode('Algun texto');
const elementoPai = document.querySelector('#container-principal');

novoElemento.appendChild(texto);

elementoPai.insertBefore(novoElemento, elementoAlvo);
