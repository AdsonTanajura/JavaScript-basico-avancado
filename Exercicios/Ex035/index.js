const calculadora = {
  action: {
    soma: (...args) => {
      if (args.length > 2) {
        return "Erro: Não pode enviar mais de dois parâmetros!";
      } else { 
        return args[0] + args[1];
      }
    },
    subtrair: (...args) => {
      if (args.length > 2) {
        return "Erro: Não pode enviar mais de dois parâmetros!";
      } else { 
        return args[0] - args[1];
      }
    },
    multiplicar: (...args) => {
      if (args.length > 2) {
        return "Erro: Não pode enviar mais de dois parâmetros!";
      } else { 
        return args[0] * args[1];
      }
    },
    dividir: (...args) => {
      if (args.length > 2) {
        return "Erro: Não pode enviar mais de dois parâmetros!";
      } else { 
        return args[0] / args[1];
      }
    },
  },
};

console.log(calculadora.action.soma(1, 2));        
console.log(calculadora.action.subtrair(1, 2));    
console.log(calculadora.action.multiplicar(1, 2)); 
console.log(calculadora.action.dividir(1, 2));     
