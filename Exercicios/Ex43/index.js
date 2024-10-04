const marcas = [
    "Marca: Nike",               // Válido
    "Marca: Adidas",             // Válido
    "Marca: Puma",               // Válido
    "Marca: Reebok",             // Válido
    "Marca: New_Balance",        // Válido (com underscore)
    "Marca: Under_Armour",       // Válido (com underscore)
    "Marca: Asics",              // Válido
    "Marca: Mizuno",             // Válido
    "Marca: Converse",           // Válido
    "Marca: Vans",               // Válido
    "Marca: 123Sport",           // Válido (números permitidos)
    "Marca: !Ninja",             // Inválido (começa com caractere especial)
    "Marca: Nike Air Max",       // Inválido (contém espaço)
    "Marca: Adi das",            // Inválido (contém espaço)
    "Marca: "                    // Inválido (não tem nome da marca)
  ];
  
  console.log(marcas);
  

const isMarca = /Marca: \w+/;

marcas.forEach(marca => {
    if(isMarca.test(marca)) {
        console.log(marca);
    }
})
