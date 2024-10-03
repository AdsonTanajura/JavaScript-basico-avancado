const casa = {
  "cor": "red",
  "valor": "2000.000.00",
  "dono": "Adson"
};


console.log(casa.cor);
console.log(casa.dono);
console.log(casa.valor);

console.log('Esse é meu objeto Casa:' + casa);
console.log('Vou trasformar ele em String');

const casaString = JSON.stringify(casa);
console.log(casaString);

console.log('Agora vou trasformar ele de volta em objeto e vou adicionar outro valor');
const casaJson = JSON.parse(casaString);

casaJson.valor = 10000.00;

console.log(casaJson);