const a = 10;

const test = (n) => {
    const a = 2 * n;
    if(a > 0) {
        const a = 0;
        console.log(a);
    }
    console.log(a);
};

test(a);

console.log(a);