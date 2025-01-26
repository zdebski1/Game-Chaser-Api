import { FastifyInstance } from 'fastify';
import { visitController } from '../controllers/visits';

export async function visitRoutes(app: FastifyInstance) {
  app.post('/visits', visitController);
}
