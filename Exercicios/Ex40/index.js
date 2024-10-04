class Conta {
  constructor({saldoCC, saldoCP, juros}) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }
  saque(valor) {
    this.saldoCC -= valor;
  }
  trasferirCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }
  trasferirCC(valor) {
    this.saldoCC += valor;
    this.saldoCP -= valor;
  }

  jurosAniversario() {
    const juros = this.saldoCP * this.juros / 100;
    this.saldoCP += juros;
  }
};

class ContaEspecial extends Conta {
  constructor({saldoCC, saldoCP, juros}) {
    super(saldoCC, saldoCP, juros * 2)
  }
};

const conta = new Conta({saldoCC: 1000, saldoCP: 5000, juros: 1});

console.log(conta);
conta.saque(500);

console.log(conta);

conta.deposito(5000);
console.log(conta);

conta.trasferirCP(3000);
console.log(conta);

conta.jurosAniversario();
console.log(conta);

const conta2 = ContaEspecial({saldoCC: 1000, saldoCP: 5000, juros: 1})
console.log(conta2);
conta2.jurosAniversario();
