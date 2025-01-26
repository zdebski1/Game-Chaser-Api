import { FastifyRequest, FastifyReply } from 'fastify';
import { Visit } from '../models/visits';
export declare const createVisitController: (req: FastifyRequest<{
    Body: Omit<Visit, "visitid" | "isdeleted">;
}>, res: FastifyReply) => Promise<never>;
//# sourceMappingURL=visits.d.ts.map