class Car {
  constructor({ marca, cor }) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = 0;
  }

  abastecer(litros) {
    this.gasolinaRestante = litros;
    console.log(`Abastecido com ${litros} litros de gasolina.`);
  }

  anda(ligar) {
    if (this.gasolinaRestante <= 0) {
      console.log('Está sem gasolina!!!');
      return; 
    } else if (!ligar) {
      return console.log('Carro esta desligado!!')
    }
    console.log('Carro esta ligado!!')
    console.log('O carrro esta andando!!!')
    console.log('Seu combustivel é: ' + this.gasolinaRestante + ' litros');
    const intervalo = 1 * 60 * 1000;

    const intervalID = setInterval(() => {
      if (this.gasolinaRestante > 0) {
        this.gasolinaRestante -= 2;
        console.log('Seu combustível restante: ' + this.gasolinaRestante + ' litros.');
      } else {
        console.log('Está sem gasolina!!!');
        clearInterval(intervalID); 
      }
    }, intervalo);
  }
}

const palio = new Car({ marca: 'Fiat', cor: 'Red' });

palio.abastecer(10); 
palio.anda(ligar = true);

