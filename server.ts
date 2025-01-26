import fastify from 'fastify';
import { createVisitController } from './src/controllers/createVisitController';
import { getStadiumController } from './src/controllers/getStadiumController';

const app = fastify();

app.post('/visits', createVisitController);
app.get('/stadium', getStadiumController);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
})