const entrarAutoEscola = (idade) => {
     if(idade >= 18) {
          console.log('Você pode fazer AutoEscola');
     } else {
          console.log('Você nao pode fazer AutoEscola');
     };
};

entrarAutoEscola(18);

entrarAutoEscola(17);