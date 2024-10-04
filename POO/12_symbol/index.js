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
const coracao = Symbol();
Pessoa.prototype[coracao] = true;

const adson = new Pessoa({nome:'Adson', idade: 22, sexo: 'Masculino'});

adson.andar();



console.log(adson.nome);
console.log(Pessoa.prototype.nome);

// Acessar Symbol

console.log(Pessoa.prototype[coracao]);
console.log(adson[coracao]);