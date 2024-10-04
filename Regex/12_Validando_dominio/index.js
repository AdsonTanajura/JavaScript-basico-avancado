const dominios = [
    "google.com",       // Válido
    "example.org",      // Válido
    "my-site.net",      // Válido
    "website.com.br",   // Válido
    "sub.dominio.com",  // Válido (subdomínio)
    "invalid_domain",   // Inválido (sem TLD, uso de underscore)
    "no-tld",           // Inválido (falta a extensão, como .com)
    ".com",             // Inválido (falta o nome do domínio)
    "domain..com",      // Inválido (dois pontos consecutivos)
    "domain.c",         // Inválido (TLD muito curto)
    "12345.com",        // Válido (domínios podem começar com números)
    "site.with.many.sub.domains.com", // Válido
  ];
  

const validarDominio = /^(www\.)?\w+(\.com|\.com\.br)$/;


dominios.forEach(dom => {
    if(validarDominio.test(dom)) {
        console.log(`O dominio ${dom} é valido!!`)
    } else {
        console.log(`O dominio ${dom} é invalido!!`)
    }
})
