const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);



const newPessoa = Object.create(pessoa);

console.log(newPessoa.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(newPessoa) === pessoa);


