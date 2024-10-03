const numeros = [5, 12, -3, 8, 19, 7, -15, 22, 0, 4];
let total = 0;
numeros.forEach(num => {
    total += num;
})
console.log('Eu vou somar todos esses numeros: ' + numeros );
console.log('O total dar: ' + total);

const numeros2 = [15, 32, 48, 64, 79, 85, 93, 105, 117, 123, 137, 142, 155, 168, 174, 189, 196, 205, 214, 223, 234, 245, 256, 269, 278, 289, 302, 315, 328, 334, 349, 359, 372, 386, 399, 412, 426, 435, 448, 459];

console.log('Agora eu tenho esses números: ' + numeros2);
console.log('Eu vou seprar dos numeros que sao Par dos numeros Inpar');

let numerosPar = [];
let somaPar = 0;
let numerosInpar = [];
let somaInpar = 0;


numeros2.forEach(numero => {
    if(numero % 2 === 0) {
        numerosPar.push(numero);
        somaPar += numero;
    } else {
        numerosInpar.push(numero);
        somaInpar += numero;
    }
})

console.log('Os numero Par:' + numerosPar);
console.log('Os numeros Inpar: ' + numerosInpar);



console.log('As somas dos numero pares é: ' + somaPar);

console.log('As somas dos numero inpar é: ' + somaInpar);

const nomes = ["Lucas", "Ana", "João", "Mariana", "Pedro", "Clara", "Gabriel", "Fernanda", "Carlos", "Juliana"];

console.log('Eu tenho uma lista que contem os nomes de: ' + nomes);

console.log('Eu vou colocar um prefixo no a numeracao de cada pessoa');

n = 1;

nomes.forEach(nome => {
    console.log(`${n} - ${nome}`);
    n++
})
