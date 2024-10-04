class Pessoa {
  constructor({nome, idade, sexo}) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  andar() {
    console.log('Estou andando');
  }
}
Pessoa.prototype.nome = 'NAN';

const adson = new Pessoa({nome:'Adson', idade: 22, sexo: 'Masculino'});

adson.andar();



console.log(adson.nome);
console.log(Pessoa.prototype.nome);
