const saudacao = (nome) => {
    if(typeof nome != 'string') {
        throw new Error('O paramentro tem que ser uma string!!')
    } else{
        console.log('Bem vindo ' + nome);
    }
}