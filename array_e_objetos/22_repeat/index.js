const fullName = 'Adson Nunes Tanajura';
console.log('Seu nome é ' + fullName);
console.log('Eu vou inverter seu nome!!!')

const splitName = fullName.split(' ');

const nomeInvertido = splitName.reverse().join(' ');

console.log(nomeInvertido.repeat(100));