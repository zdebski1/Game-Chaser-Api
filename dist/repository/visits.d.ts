import { Visit } from '../models/visits';
export declare const insertVisit: (visitData: Omit<Visit, "visitid" | "isdeleted">) => Promise<number>;
export declare const returnVisits: () => Promise<Visit[]>;
//# sourceMappingURL=visits.d.ts.map