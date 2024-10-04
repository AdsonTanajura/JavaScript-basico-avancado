const datasDeAniversario = [
    "1990-01-15",   // Válido (formato ISO: YYYY-MM-DD)
    "15/01/1990",   // Válido (formato DD/MM/YYYY)
    "1995-12-25",   // Válido (formato ISO)
    "25/12/1995",   // Válido (formato DD/MM/YYYY)
    "2000-02-29",   // Válido (ano bissexto)
    "29/02/2000",   // Válido (ano bissexto no formato DD/MM/YYYY)
    "1985-11-30",   // Válido (formato ISO)
    "30-11-1985",   // Inválido (formato incorreto, deveria ser DD/MM/YYYY)
    "1999/12/31",   // Inválido (barra em vez de hífen ou formato incorreto)
    "31/04/1999",   // Inválido (abril não tem 31 dias)
    "2022-13-10",   // Inválido (mês inválido)
    "15/15/2015",   // Inválido (dia e mês inválidos)
    "1980-02-30",   // Inválido (fevereiro nunca tem 30 dias)
  ];

const validarDataDeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

datasDeAniversario.forEach(data => {
    if(validarDataDeNasc.test(data)) {
        console.log('Feliz aniversario!!!')
        console.log('Essa data de anivesario é valida' + data);
    } else {
        console.log('Essa data ' + data +' esta incorreta')
    }
})