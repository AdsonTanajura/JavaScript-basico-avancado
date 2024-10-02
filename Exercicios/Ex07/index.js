const ageMin = 18;

let age = prompt('Qual é sua idade?');

const isAuthorized = age >= ageMin;  

if(isAuthorized) {
    console.log('Você pode entrar');
} else {
    console.log('Você não pode entar');
}