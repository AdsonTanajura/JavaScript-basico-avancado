const constante1 = 98;
const constante2 = 81;
const constante3 = 63;
const constante4 = 89;
const constante5 = 8;
const constante6 = 7;
const constante7 = 86;
const constante8 = 23;
const constante9 = 18;
const constante10 = 86;

const somaTudo = (...numbers) => {
    console.log(numbers);
    totalValue = 0;
    numbers.forEach(number => {
        totalValue += number;
    })

    return totalValue;
}

const resultado = somaTudo(constante1, constante2, constante3, constante4, constante5, constante6, constante7, constante8, constante9, constante10,1 ,2 ,4, 5)

console.log(resultado);