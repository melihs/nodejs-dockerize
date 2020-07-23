var http = require("http");

http.createServer((request, response) => {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Hello dockerize');
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');