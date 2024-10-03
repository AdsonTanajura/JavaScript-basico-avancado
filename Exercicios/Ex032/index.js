const itensMochila = [
    "Caderno",
    "Caneta",
    "Lápis",
    "Borracha",
    "Livro",
    "Garrafa de água",
    "Fones de ouvido",
    "Carregador de celular",
    "Lanche",
    "Bloco de notas",
    "Chave",
    "Carteira",
    "Calculadora",
    "Óculos de sol",
    "Capa de chuva",
    "Agenda",
    "Powerbank",
    "Tesoura",
    "Estojo",
    "Pen drive"
  ];
  
  console.log('Eu tenho um lista de coisa que esta na minha mochila, eu vou ordena eles em uma outra lista: ')
  console.log('Lista sem ordena: ' + itensMochila);

  let itensOrdenados = [];
  n = 0;
  itensMochila.forEach(iten => {
    n++
    itemJunto = ( n + ' - ' + iten );
    itensOrdenados .push(itemJunto);
  })

console.log('Ta aqui a lista ordenada:' + itensOrdenados);

const numeros = [
    1, 5, 12, 34, 45, 56, 78, 89, 102, 234, 345, 456, 567, 678, 789, 
    890, 912, 1024, 1234, 2345, 3456, 4567, 5678, 6789, 7890
  ];

console.log('Agora eu tenho esses numeros: ' + numeros);
console.log('Vou somar tudo e retornar aqui!')

let valorTotal = 0;
numeros.forEach(numero => {
    valorTotal += numero;
})

console.log(valorTotal);