const nomeComIdade = ({nome, idade}) => {
    if(nome && !idade) {
        console.log(`Então você se chama ${nome}`);
    } else {
        console.log(`Então você se chama ${nome} e tem ${idade} anos de idade`);
    }
};

nomeComIdade({nome: 'Adson'});

nomeComIdade({nome: 'Tata', idade: 22});
