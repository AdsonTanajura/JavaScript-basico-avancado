const onibus = {
    rodas: 8,
    limitePassageros: 40,
    portas: 2,
};
console.log(onibus);

onibus.janela = 20;
delete onibus.rodas;

console.log(onibus.janela);