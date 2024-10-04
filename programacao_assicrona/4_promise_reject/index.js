function verificaNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log("O numero é " + num)) ;
        } else {
            reject(new Error('Falhou'));
        }
    });
}

verificaNumero(2);
verificaNumero(3);