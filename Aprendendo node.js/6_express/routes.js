import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
    response.send('Primeira rota com Express');
})

routes.get('/helo', (request, response) => {
    response.send('Helo World');
})

export default routes;
