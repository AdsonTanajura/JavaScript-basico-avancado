const dog = {
    patas: 4,
    raca: 'SRD',
    latir: () => {
        console.log('Au Au');
    }
}

const pastorAlemao = Object.create(dog);

pastorAlemao.latir();
pastorAlemao.raca = 'Pastor Alemao';

console.log(pastorAlemao.raca);
console.log(dog.raca);
