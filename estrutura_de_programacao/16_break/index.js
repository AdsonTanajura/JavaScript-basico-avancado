console.log('Eu tenho um loop que conta de 1 a 100, mas eu vou pedir que ele mande um console log quando estiver no 25 e para de contar quando estiver no 50.')

for(i = 1; i <= 100; i++) {
    console.log(i);
    if(i == 25) {
        console.log('Olha eu aqui no 25!!!!!');
    }
    if(i == 50) {
        console.log('Cheguei no 50, vou parar de contar');
        break;
    }
}