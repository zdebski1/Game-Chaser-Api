import { FastifyInstance } from 'fastify';
import { createVisitController } from '../controllers/visits';

export async function visitRoutes(app: FastifyInstance) {
  app.post('/visits', createVisitController);
}
