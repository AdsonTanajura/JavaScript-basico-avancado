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


const adson = new Pessoa({nome: 'Adson', idade: 22, sexo: 'Masculino'});

adson.andar();