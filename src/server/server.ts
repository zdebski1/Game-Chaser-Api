import http from 'http';
import { visitController } from '../controllers/visits';

const server = http.createServer((req, res) => {
  if (req.url?.startsWith('/visits')) {
    visitController(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
