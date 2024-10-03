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

const carro = {
    marca: 'Toyoya',
    ano: 2024,
    modelo: 'nisan',
    valor: 2222.22,
    acoes: {
        andarFrente: () => {
            console.log('estou andando para frente');
        },
        andarTras: () => {
            console.log('estou andando para tras');
        },
    }
}

console.log(carro);

Object.assign(carro, pessoa);

console.log(carro);