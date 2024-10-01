const speed = 120;

const speedMax = 100;
const speedMin = 100;


if(speed <= speedMax && speed > speedMax) {
    console.log('Dentro do permitido');
}
else if (speed < speedMin ) {
    console.log('Abaixo da velocidade minima da via');
} else {
    console.log('Velocidade acima do Permitido');
}

