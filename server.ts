import fastify from 'fastify';
import { createVisitController } from './src/controllers/visit';
import { returnStadiumController } from './src/controllers/stadium';

const app = fastify();

app.post('/visits', createVisitController);
app.get('/stadium', returnStadiumController);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
})