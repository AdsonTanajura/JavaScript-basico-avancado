const emails = [
    "usuario@example.com",     // Válido
    "nome.sobrenome@dominio.com", // Válido
    "user123@site.org",        // Válido
    "meu.email@empresa.com.br",// Válido
    "contato@sub.dominio.com", // Válido (subdomínio)
    "usuario@dominio",         // Inválido (falta o TLD)
    "usuario@.com",            // Inválido (falta o nome de domínio)
    "@example.com",            // Inválido (falta o nome de usuário)
    "user@com",                // Inválido (TLD muito curto)
    "email@dominio..com",      // Inválido (dois pontos consecutivos)
    "email@dominio.c",         // Inválido (TLD muito curto)
    "email@dominio,com",       // Inválido (vírgula em vez de ponto)
    "usuário@domínio.com",     // Inválido (caracteres acentuados)
    "user@domain.toolongextension", // Inválido (extensão TLD longa demais)
  ];
  
const validarEmail = /\w+@\w+\.\w+/;

emails.forEach(email => {
    if(validarEmail.test(email)) {
        console.log(email);
        console.log('Esse e-mail é valido!!!')
    } else {
        console.log(email);
        console.log('Esse e-mail é invalido!!!')
    }
})