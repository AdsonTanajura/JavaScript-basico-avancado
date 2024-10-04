const reg1 = new RegExp('bola');

const texto = 'EU>COm>PREEI UMA adawbola AGORA MDSSCSCAdawdawdawdawd';

console.log(reg1.test(texto));

console.log(/bola/.test(texto))

const regEmail = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

console.log(regEmail.test('adson.tanajura@gl.com'));