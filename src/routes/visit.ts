import { FastifyInstance } from 'fastify';
import { createVisitController } from '../controllers/createVisitController';

export async function visitRoutes(app: FastifyInstance) {
  app.post('/visits', createVisitController);
}