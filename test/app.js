const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World\n');   
  }
  response.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:3000/`);
});

