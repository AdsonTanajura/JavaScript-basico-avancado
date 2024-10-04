class ContaBanco {
  constructor({saldo, usuario}) {
    this.saldo = saldo;
    this.usuario = usuario;
    this.polpanca = 0;
  };

  depositar(valor) {
    this.saldo += valor; 
    console.log('O valor de ' + valor + 'R$ foi depositado com sucesso!');
    console.log('O saldo atual da sua conta é: ' + this.saldo + 'R$');
  };
  saque(valor) {
    if(valor > this.saldo) {
      console.log('Saldo indisponivel!');
    } else {
      this.saldo -= valor;
      console.log('Valor retirado com Sucesso!');
      console.log('Saldo atual é de ' + this.saldo + 'R$' );
    }
  };
  moveParaPolpanca(valor) {
    if(this.saldo < valor) {
      console.log('Saldo indisponivel!');
    } else {
      this.saldo -= valor;
      
      this.polpanca += valor;
      console.log('Valor movido para Polpanca com Sucesso!')
    }
  };

  moveDaPolpanca(valor) {
    if (this.polpanca < valor) {
      console.log('Saldo indisponivel!');
    } else {
      this.polpanca -= valor;
      this.saldo += valor;
      console.log('Valor removido da Polpanca com Sucesso!')
     }
  }
}


const adsonAccount = new ContaBanco({usuario: 'Adson Nunes Tanjura', saldo: 10000.00});

console.log(adsonAccount.saldo);

adsonAccount.depositar(5000);

console.log(adsonAccount.saldo);

adsonAccount.saque(10000);

console.log(adsonAccount.saldo);

adsonAccount.saque(10000);
console.log(adsonAccount.saldo);

console.log(adsonAccount.polpanca);

adsonAccount.moveParaPolpanca(100);
console.log(adsonAccount.polpanca);
console.log(adsonAccount.saldo);




