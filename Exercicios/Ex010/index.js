const speedMax = 80;
const speedMin = 40;
const carSpeed = 100;

if(carSpeed > speedMax) {
    console.log('Acima da Velocidade permitida, sujeito a multa!!');
}
else if(carSpeed <= speedMax && carSpeed >= speedMin) {
    console.log('Dentro do permitido');
} else {
    console.log('Muito de vagar, esta abaixo da velocidade minima, sujeito a multa!!')
};