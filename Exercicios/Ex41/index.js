const letraMin = /^.*ID$/;

console.log(letraMin.test('aaaaaaID'));
console.log(letraMin.test('AAAID'));
console.log(letraMin.test('AdaddawdID'));
console.log(letraMin.test('Adaddawd'));
