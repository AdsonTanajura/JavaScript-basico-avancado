
const carro = {
    marca: 'Toyoya',
    ano: 2024,
    modelo: 'nisan',
    valor: 2222.22,
    acoes: {
        andarFrente: () => {
            console.log('estou andando para frente');
        },
        andarTras: () => {
            console.log('estou andando para tras');
        },
    }
}

delete carro.modelo;
console.log(carro.modelo);

carro.moto = true;

console.log(carro.moto);