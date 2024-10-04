const ceps = [
    "01001-000", // Válido
    "02002-020", // Válido
    "0300-3030", // Inválido (formato errado)
    "04A04-040", // Inválido (letra no lugar de número)
    "05005-050", // Válido
    "06006060",  // Inválido (sem o hífen)
    "07007-070", // Válido
    "08008-08",  // Inválido (número de dígitos incorreto)
    "09009-090", // Válido
    "10010-100", // Válido
    "000000000", // Inválido (número contínuo, sem hífen)
    "ABC-DEFG"   // Inválido (apenas letras)
  ];
const isCep = /\d{5}-\d{3}/;
ceps.forEach(cep => {
    console.log(isCep.exec(cep));
})

const tel =/\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;

const telefones = [
    "(11) 98765-4321", // Válido
    "1198765-4321",    // Válido
    "11 98765-4321",   // Válido
    "(11) 1234-5678",  // Válido
    "(21)98765-4321",  // Válido
    "(31) 99876-5432", // Válido
    "98765-4321",      // Inválido (falta o código de área)
    "11-98765-4321",   // Inválido (falta o espaço ou parênteses no código de área)
    "(11)987654321",   // Inválido (falta o hífen)
    "(55) 12345-6789", // Válido
    "(44) 9876-5432",  // Inválido (deveria ter 5 dígitos na primeira parte)
    "110987654321"     // Inválido (falta o hífen e espaço)
  ];
  
  telefones.forEach(tele => {
    console.log(tel.exec(tele));
  })
  


