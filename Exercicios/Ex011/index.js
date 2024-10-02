const age = 18;
const minAgeForChair = 18;
const isChair = false;

if(age >= minAgeForChair && isChair == true) {
    console.log('Vocè pode digir!!');
}
else if (age >= minAgeForChair && isChair == false) {
    console.log('Vocè nao tem Carteira de Motorista, por isso nao pode digir!!');
} else {
    console.log('Vocé não pode digir!!');
};