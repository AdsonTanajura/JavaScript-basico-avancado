
function criarCachorro({raca}){
    const dog = Object.create({});
    dog.raca = raca;

    return dog;
}



const pastorAlemao = criarCachorro('Pastor Alemao');


console.log(pastorAlemao.raca);
