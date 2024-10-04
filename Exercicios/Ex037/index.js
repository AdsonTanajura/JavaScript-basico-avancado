class Carrinho {
  constructor() {
    this.carrinhoStore = [];
  }

  setItem({itemName, unitValor, quantit}) {
    const vTotal = (unitValor * quantit);
    const id = Math.floor(Date.now() * Math.random());
   this.carrinhoStore.push({
    id,
    vTotal,
    itemName,
    quantit,
    unitValor
  });
  };
  fecharConta() {
    let valorTotal = 0;
    this.carrinhoStore.map(item => {
      valorTotal += item.vTotal
    })
    return console.log('O valor do carrinho da ' + valorTotal + 'R$');
  }

  removerItem(itemName, quanti) {
    if (itemName && !quanti) {
      const newStore = this.carrinhoStore.filter(item => item.itemName !== itemName);
      this.carrinhoStore = newStore;
    }
    else if (itemName, quanti) {
      this.carrinhoStore.map(item => {
        if(item.itemName === itemName) {
          item.quantit = quanti
          const newVtotal = quanti * item.unitValor;
          item.vTotal = newVtotal;
        }
      })
    } else {
      console.log('Digite o Item que desseja altera!');
    }
  }
}


const carrinho = new Carrinho();

carrinho.setItem({itemName:'Banana', quantit: 5, unitValor:2.50})
carrinho.setItem({itemName:'Caderno', quantit: 10, unitValor: 5.40})
carrinho.setItem({itemName:'Caderno', quantit: 10, unitValor: 5.40})

console.log(carrinho.carrinhoStore);
carrinho.removerItem('Caderno', 5);
console.log(carrinho.carrinhoStore);

carrinho.fecharConta();