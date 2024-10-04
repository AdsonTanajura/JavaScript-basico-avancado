class Pessoa {
  constructor({nome, idade, sexo}) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.profissao = 'NAP'
  }
  andar() {
    console.log('Estou andando');
  }
  set novaProficao(proficao) {
     this.profissao = proficao;
  }

  get verProficao() {
    return console.log('A proficao é ' + this.profissao);
  }
}

const adson = new Pessoa({nome: 'Adson', idade: 22, sexo: 'Mascolino'});


adson.novaProficao = 'Desenvolvedor',

adson.verProficao;