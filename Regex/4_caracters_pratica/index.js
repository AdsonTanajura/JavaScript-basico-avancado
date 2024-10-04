const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("ads"));
console.log(dis.test('05') && '5'.length == 2);
console.log(dia.test('ads1'));

const palavrsPeloMenosTresLetras = /\w\w\w/;

console.log(palavrsPeloMenosTresLetras.test("asd"));
console.log(palavrsPeloMenosTresLetras.test("asdd"));
console.log(palavrsPeloMenosTresLetras.test("as"));