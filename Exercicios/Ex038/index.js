class Adress {
  constructor({rua, bairro, cidade, estado}) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  mostraEnderecoCompleto () {
    console.log(`
      Rua: ${this.rua}
      Bairro: ${this.bairro}
      Cidade: ${this.cidade}
      Estado ${this.estado}
      `)
  }

  set trocarRua(rua) {
    this.rua = rua;
  }

  set trocaBairro(bairro) {
    this.bairro = bairro;
  }

  set trocaCidade(cidade) {
    this.cidade = cidade;
  }

  set trocarEstado(estado) {
    this.estado = estado;
  }
}


const endereco = new Adress({bairro:'Tututu', cidade:'salvador', estado:'BA', rua:'LULULI'});

endereco.trocaCidade = 'Sao Paulo'

endereco.mostraEnderecoCompleto()