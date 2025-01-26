import { FastifyInstance } from 'fastify';
import { returnStadiumController } from '../controllers/stadium';

export async function stadiumRoutes(app: FastifyInstance) {
  app.get('/stadium', returnStadiumController);
}
