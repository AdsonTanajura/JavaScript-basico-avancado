const pessoa = {
    nome: "João Silva",
    idade: 30,
    profissao: "Desenvolvedor",
    sexo: "Masculino",
    estadoAtual: "Solteiro",
    localDeNascimento: "São Paulo",
    acoes: {
        fala1: () => {
            console.log('Boa noite!');
        },
        fala2: () => {
            console.log('Boa tarde!');
        },
        fala3: () => {
            console.log('Boa noite!');
        }
    }
};

console.log(pessoa.superPoder);

const superPessoa = pessoa;

superPessoa.nome = 'Adson Nunes';
superPessoa.superPoder = 'Velocidade';
superPessoa.idade = 22;

console.log(superPessoa.superPoder);