const comprar = ({valor, parcelar = false, quantasParcela = 0}) => {
    if(parcelar === true && quantasParcela >= 2) {
        const valorParcelado = valor / quantasParcela;
        console.log(`O valor do produto é R$${valor}, como foi desejado pelo senhor, vamos parcerlar em ${quantasParcela}x de R$ ${valorParcelado.toFixed(2)}, obrigado por comprar com a gente!`);
    } else if (parcelar === true && quantasParcela < 2) {
        console.log('Vejo que quer parcelar so que nao foi informado a quantidade de parcelas. Preencha com a quantidade de parcelas que deseja');
    } else {
        console.log(`Obrigado por comprar com a gente! Compra no valor de ${valor}`);
    }
};

comprar({valor:200});


comprar({valor:2500, parcelar:true, quantasParcela:12});

comprar({valor:3000, parcelar: true});