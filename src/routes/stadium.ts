import { FastifyInstance } from 'fastify';
import { getStadiumController } from '../controllers/getStadiumController';

export async function stadiumRoutes(app: FastifyInstance) {
  app.get('/stadium', getStadiumController);
}
