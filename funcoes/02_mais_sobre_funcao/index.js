const soma = (n1, n2) => {
    return n1 + n2;
};

const result = soma(1, 2);

console.log(result);

const bemVindo = (yourName) => {
    console.log(`Bem vindo ${yourName}`);
};

bemVindo('Adson Nunes Tanajura');

const ultrapassouVelocidadeMaxima = (speed) => {
    const speedLimit = 100;
    if (speed > speedLimit) {
        return true;
    } else {
        return false;
    }
};

console.log(ultrapassouVelocidadeMaxima(110));

