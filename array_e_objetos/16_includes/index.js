const carros = ["Toyota Corolla", "Honda Civic", "Ford Mustang", "Chevrolet Camaro", "Tesla Model S", "BMW X5", "Audi A4", "Mercedes-Benz C-Class", "Volkswagen Golf", "Jeep Wrangler"];

const temCarror = carros.includes('Toyota Corolla');

if(temCarror) {
    console.log('Temos esse carro disponivel!!');
} else {
    console.log('Nao temos esse carror no estoque');
}
