
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

const { idade, nome } = pessoa;

console.log(nome);
console.log(idade);
