function imprimirNoConsole() {
    console.log('Hello world');
};

imprimirNoConsole();

const escreverNoConosle = (text) => {
    console.log(text);
};

escreverNoConosle('Oi');

const numeroAleatorio = () => {
    console.log(Math.ceil((Math.random() * 100) + 1));
};

numeroAleatorio()