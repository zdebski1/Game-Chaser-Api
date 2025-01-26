import { Visit } from '../models/visits';
import { Stadium } from '../models/stadium';
export declare const createVisit: (visitData: Omit<Visit, "visitid" | "isDeleted">, stadium: Pick<Stadium, "stadiumid">) => Promise<number>;
//# sourceMappingURL=visits.d.ts.map