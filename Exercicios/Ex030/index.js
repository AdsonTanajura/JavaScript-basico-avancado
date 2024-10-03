const nomes = ["Lucas", "Ana", "João", "Mariana", "Pedro", "Clara", "Gabriel", "Adson", "Fernanda", "Carlos", "Juliana"];

const myName = 'Adson';

const onMyName = nomes.includes(myName);

if(onMyName) {
    console.log('Bem vindo ' + myName);
} else {
    console.log('Você nao esta convidado para a festa :c');
}