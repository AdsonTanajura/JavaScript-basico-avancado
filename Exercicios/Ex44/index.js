const enderecosIP = [
    "192.168.1.1",        // Válido
    "255.255.255.255",    // Válido
    "0.0.0.0",            // Válido
    "10.0.0.1",           // Válido
    "172.16.254.1",       // Válido
    "203.0.113.45",       // Válido
    "8.8.8.8",            // Válido (IP do Google DNS)
    "256.100.50.25",      // Inválido (256 não é válido)
    "192.168.1.300",      // Inválido (300 não é válido)
    "192.168.1",          // Inválido (falta octetos)
    "192.168.1.1.1",      // Inválido (mais de 4 octetos)
    "abc.def.ghi.jkl",    // Inválido (não é um formato válido)
    "123.456.789.0",      // Inválido (456 e 789 não são válidos)
    "172.16.0.1",         // Válido
    "10.10.10.10",        // Válido
    "192.168.0.255"       // Válido
  ];
  
const isIpAdress = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

enderecosIP.forEach(ip => {
    if(isIpAdress.test(ip)) {
        console.log('Ip valido: ' + ip);
    } else {
        console.log('Ip nao é valido' + ip);
    }
})