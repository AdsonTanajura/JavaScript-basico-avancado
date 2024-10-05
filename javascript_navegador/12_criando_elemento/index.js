const lista = document.createElement('ul');

for(i = 0; i < 5; i++) {
    const item = document.createElement('li');
    const texto = document.createTextNode('texto lista ' + (i + 1));
    item.appendChild(texto);

    lista.appendChild(item);
} 

const firstDiv = document.getElementById('container-principal');

firstDiv.appendChild(lista);