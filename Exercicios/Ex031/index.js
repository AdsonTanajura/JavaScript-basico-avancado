const arrayCom5Elementos = ["Maçã", "Banana", "Laranja", "Uva", "Pera"];

const arrayComMenosDe5Elementos = ["Cadeira", "Mesa", "Sofá"];

const verificaTotalElementos = (lista) => {
    if(lista.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
};
verificaTotalElementos(arrayCom5Elementos);
verificaTotalElementos(arrayComMenosDe5Elementos);



