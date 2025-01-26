import { FastifyInstance } from 'fastify';
import { createVisitController } from '../controllers/visit';

export async function visitRoutes(app: FastifyInstance) {
  app.post('/visits', createVisitController);
}
