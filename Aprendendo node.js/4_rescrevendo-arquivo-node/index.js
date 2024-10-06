const {readFile, writeFile} =require('fs');

writeFile('arquivo.txt', 'Esse texto voi colocado aqui por writeFile', (error) => {
    if(error) {
        throw error;
    } else {
        console.log('Arquivo escrito')
    }
})

readFile('arquivo.txt', 'utf8', (error, texto) => {
    if(error) {
        throw error;
    } else {
         console.log(texto);
    }
})