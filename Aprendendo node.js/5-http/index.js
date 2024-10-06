const {createServer} = require('http');

const server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1> hello word! </h1>
        <p> Primeira pagina com node.js</p>
`);
    response.end();
})

server.listen(8000);

console.log("Ouvindo a porta 80000");