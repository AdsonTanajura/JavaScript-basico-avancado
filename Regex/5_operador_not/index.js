const notab = /[âb]/;

console.log(notab.test('a'))
console.log(notab.test('Aqui tem a'))

const nottoaz = /[^a-z]/;

console.log(nottoaz.test('adawdaw'))
console.log(nottoaz.test('12312'));
console.log(nottoaz.test('12312adaw'))

const az = /[a-z]/;

console.log(az.test('adawdaw'))
console.log(az.test('12312'));
console.log(az.test('12312adaw'))
