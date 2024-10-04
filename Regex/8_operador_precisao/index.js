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
    if(isCep.test(cep)) {
        console.log('Cep valido! ' + cep);
    } else {
        console.log('Cep invalido! ' + cep);
    }
})
  


