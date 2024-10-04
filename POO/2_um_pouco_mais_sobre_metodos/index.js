const pessoa = {
    nome: '',
    idade: 0,
    setNome: function (novoNome)  {
        this.nome = novoNome;
    },
    setIdade: function (novaIdade) {
        this.idade = novaIdade;
    },
    getNome: function () {
        return this.nome;
    },
    getIdade: function () {
        return this.idade;
    },
}
pessoa.setNome('Adson')
pessoa.setIdade(22);
console.log(pessoa.getNome());
console.log(pessoa.getIdade());

