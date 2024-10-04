function Pessoa({nome, idade, sexo}) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.andar = function() {
      return 'Estou andando!!';
    }
}

const adson = new Pessoa({nome: 'Adson', idade: 22, sexo: 'Masculino'});

console.log(adson.andar());