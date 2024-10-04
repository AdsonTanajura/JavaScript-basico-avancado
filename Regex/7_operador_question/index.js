const opcional = /Prova\s?\d?/;

console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));
console.log(opcional.test("Prova 2"));

const opcional2 = /Prova\s\d?/;

console.log(opcional2.test("Prova"));
console.log(opcional2.test("Prova 1"));
console.log(opcional2.test("Prova 2"));