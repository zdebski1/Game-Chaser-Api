import { IncomingMessage, ServerResponse } from 'http';
import { visitController } from '../controllers/visits';

const http = require('http');

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'POST' && req.url === '/visits') {
    visitController(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
