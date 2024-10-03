const nomeVendedor = 'Adson Nunes Tanajura';
const gerarId = ()=> {
   return Math.floor(Math.random() * 9999 + 1 );
};
const nomeVendedorCorigido = nomeVendedor.replace(/\s/g, '');
const id = gerarId();
const idVendedor = nomeVendedorCorigido.padStart(nomeVendedorCorigido.length + 4, id.toString());

console.log(id.toString())

console.log(idVendedor);