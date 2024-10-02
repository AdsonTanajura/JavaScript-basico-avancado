const convertPositivo = (n) => {
    if( n < 0 ) {
      return  Math.abs(n);
    } else {
        console.log('O numero: ' + n + ' nao é negativo');
    };
};

console.log(convertPositivo(-1));
console.log(convertPositivo(-100));
console.log(convertPositivo(-32));
console.log(convertPositivo(-424));

convertPositivo(23);