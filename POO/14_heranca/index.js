class Veiculo {
  constructor({name, type, motor}) {
    this.name = name;
    this.type = type;
    this.motor = motor;
  };
  andar() {
    console.log('Estou andando');
  }
}
class Car extends Veiculo {
  constructor(motor, masxSpeed, porta) {
  super(motor, motor);
  this.masxSpeed = masxSpeed;
  this.porta = porta;
  this.roda = 4;
  };
}

const bmw = new Car({name: 'BMW', type: 'car', motor: true, masxSpeed: 120, porta: 2})

console.log(bmw.name);
console.log(bmw.motor);
bmw.andar();

