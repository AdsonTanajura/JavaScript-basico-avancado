class Pessoa {
  constructor({nome, idade, sexo}) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
}


const adson = new Pessoa({nome: 'Adson', idade: 22, sexo: 'Masculino'});

console.log(adson);