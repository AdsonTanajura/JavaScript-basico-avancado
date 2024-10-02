const contaDoMaiorAoMenor = (n) => {
  let numero = n;
  while(numero > 0) {
    if(numero % 2 == 0) {
      console.log(numero);
    };
    numero--
  };
};

contaDoMaiorAoMenor(50);