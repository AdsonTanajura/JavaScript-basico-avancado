const ageMin = 18;

let age = 18;

const isAuthorized = age >= ageMin;  

if(isAuthorized) {
    console.log('Você pode entrar');
} else {
    console.log('Você não pode entar');
}