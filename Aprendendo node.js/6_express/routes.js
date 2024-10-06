import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
    response.send('Primeira rota com Express');
})

export default routes;
