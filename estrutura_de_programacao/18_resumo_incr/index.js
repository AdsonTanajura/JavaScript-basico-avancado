console.log('A seguir vai ter um loop como todos os outros, so que em vez de usar o n = n + 1 ou vou resumir esse incremento, usando o n++ e n += x');

let n = 1;
console.log('Esse primeiro loop, conta de 1 em 1 até 10');
while(n <= 10) {
    console.log(n);
    n++
};


console.log('Esse segundo Loop, vai contar de 10 em 10 até 100');

for(let num = 10; num <= 100; num += 10) {
    console.log(num);
};
