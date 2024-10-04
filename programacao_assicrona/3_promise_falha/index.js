const p = Promise.resolve(new Error("Não deu certo!"));

console.log('lalalal');


p.then((v) => {
    console.log(v);
}).catch(reason => console.log("Falhou: " + reason));