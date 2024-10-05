async function somax3(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n1 + n2);
        }, 4000);
    });
};

async function soma(a,b,c,d) {
    const y = somax3(a,b);
    const x = somax3(c,d);

    return await x + await y;
}

soma(1, 2 ,3 ,4).then(y => console.log(y));