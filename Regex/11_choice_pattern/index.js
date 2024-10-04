const frutas = /\d+ (bananas|macas|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));


const reg =  /\w+: (Matheus|Adson|Paulo)/;

console.log(reg.test("Nome: Adson"))
console.log(reg.test("Nome: Laura"))
console.log(reg.test("Nome: Paulo"))
console.log(reg.test("Nome: Matheus"))