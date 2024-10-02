const lembraSoma = (x) => {
    return (y) => {
        return x +y;
    }
};

const soma1 = lembraSoma(5);

console.log(soma1(3));