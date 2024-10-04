// Texto de exemplo contendo um número de telefone e um email
const texto = "Olá, meu número de telefone é (11) 98765-4321 e meu email é exemplo@dominio.com!";

// Regex para encontrar números de telefone e emails
const regex = /(\(\d{2}\)\s*\d{5}-\d{4})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

// Explicação da regex:
// 1. **`/`**: Delimitadores da expressão regular.
// 2. **`(\(\d{2}\)\s*\d{5}-\d{4})`**: Padrão para números de telefone:
//    - **`\(`**: O caractere de abertura de parêntese, tratado como literal.
//    - **`\d{2}`**: Dois dígitos, representando o código de área.
//    - **`\)`**: O caractere de fechamento de parêntese, tratado como literal.
//    - **`\s*`**: Zero ou mais espaços em branco entre o código de área e o número.
//    - **`\d{5}`**: Cinco dígitos, representando a parte principal do número.
//    - **`-`**: O hífen, tratado como literal.
//    - **`\d{4}`**: Quatro dígitos, representando a parte final do número.
// 3. **`|`**: Operador "OU", permitindo a busca de e-mails ou números de telefone.
// 4. **`([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})`**: Padrão para e-mails:
//    - **`[a-zA-Z0-9._%+-]+`**: Um ou mais caracteres permitidos no nome de usuário do e-mail (letras, números, ponto, sublinhado, porcentagem, mais e menos).
//    - **`@`**: O símbolo "@" que separa o nome de usuário do domínio.
//    - **`[a-zA-Z0-9.-]+`**: Um ou mais caracteres permitidos no domínio (letras, números, ponto e hífen).
//    - **`\.`**: O ponto, tratado como literal, separando o domínio da extensão.
//    - **`[a-zA-Z]{2,}`**: Duas ou mais letras que representam a extensão do domínio (ex: .com, .br).
// 5. **`g`**: Modificador que indica que a busca deve ser global, encontrando todas as ocorrências no texto.

// Usando o método `match` para encontrar todas as correspondências
const resultados = texto.match(regex);

// Exibindo os resultados encontrados no console
console.log(resultados);
