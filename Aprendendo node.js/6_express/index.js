import express from 'express';  // Importando o Express
import routes from './routes.js'; // Importando suas rotas

const app = express(); // Inicializando a aplicação Express
app.use(routes); // Usando as rotas importadas

const PORT = 3000; // Definindo a porta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // Mensagem de inicialização
});