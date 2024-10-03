const pessoa = {
    "nome": "João Silva",
    "idade": 30,
    "profissao": "Desenvolvedor Full Stack",
    "linguas": ["Português", "Inglês", "Espanhol"],
    "quantidade_livros_lidos": 50,
    "hobbies": ["Leitura", "Fotografia", "Ciclismo"],
    "interesses": ["Inteligência Artificial", "Desenvolvimento Web", "Viagens"],
    "endereco": {
      "rua": "Rua das Flores",
      "cidade": "São Paulo",
      "estado": "SP",
      "pais": "Brasil"
    }
  }

  const pessoaString = JSON.stringify(pessoa);
  console.log(pessoaString);

  const pessoaJSON = JSON.parse(pessoaString);
  pessoaJSON.nome;
  console.log( pessoaJSON.nome);
  console.log( pessoaJSON);


