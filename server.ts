import fastify from 'fastify';
import { visitController } from './src/controllers/visits';

const app = fastify();

app.post('/visits', visitController);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
})