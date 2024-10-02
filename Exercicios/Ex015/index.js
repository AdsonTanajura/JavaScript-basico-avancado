const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true; 

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

const contPrime = [];

for(let num = 1; num <= 200; num++) {
    const numPrime = isPrime(num);
    if(numPrime) {
        console.log(num);
        contPrime.push(num);
    }
} 

console.log(`De 1 a 100 temos um total de ${contPrime.length} numeros primos`);
console.log('Sendo eles: ' + contPrime);
