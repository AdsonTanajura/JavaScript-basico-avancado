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

  const {nome, linguas, profissao} = pessoa;

  console.log(nome);
  console.log(linguas);
  console.log(profissao)
  
  console.log(pessoa);