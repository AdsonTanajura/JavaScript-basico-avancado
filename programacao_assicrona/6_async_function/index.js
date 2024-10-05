async function somar(n1, n2) {
    return n1 + n2;
};

somar(2, 1).then((value) => {
    console.log(value);
})

console.log(somar(2, 2));