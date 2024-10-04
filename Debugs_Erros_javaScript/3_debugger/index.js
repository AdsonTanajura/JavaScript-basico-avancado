function calcularMedia(numeros) {
    console.log("Iniciando o cálculo da média...");
    let soma = 0;

    // Pausar a execução para inspecionar o array de números
    debugger; // Inspecione a variável 'numeros' aqui

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        console.log(`Adicionando ${numeros[i]} à soma. Soma atual: ${soma}`);
    }

    const media = soma / numeros.length;
    
    // Pausar a execução para inspecionar a média calculada
    debugger; // Inspecione a variável 'media' aqui

    return media;
}

// Testando a função
const numeros = [5, 10, 15, 20];
const mediaFinal = calcularMedia(numeros);
console.log(`A média é: ${mediaFinal}`);
