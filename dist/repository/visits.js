"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnVisits = exports.insertVisit = void 0;
const knex_1 = __importDefault(require("../config/knex"));
const insertVisit = async (visitData) => {
    const result = await (0, knex_1.default)('dbo.visit')
        .insert({
        ...visitData,
        isdeleted: false,
    })
        .returning('visitid');
    return result[0].visitid;
};
exports.insertVisit = insertVisit;
const returnVisits = async () => {
    const result = await (0, knex_1.default)('dbo.visit');
    return result;
};
exports.returnVisits = returnVisits;
//# sourceMappingURL=visits.js.map