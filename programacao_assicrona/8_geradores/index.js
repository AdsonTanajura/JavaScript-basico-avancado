function* criadorId() {
    let id = 0;
    while(true) {
        yield id++
    }
}

const criaId = criadorId();


console.log(criaId.next().value)