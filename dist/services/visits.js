"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVisit = void 0;
const visits_1 = require("../repository/visits");
const stadium_1 = require("../repository/stadium");
const createVisit = async (visitData, stadium) => {
    const { stadiumid } = stadium;
    const isStadiumValid = await (0, stadium_1.findStadiumById)(stadiumid);
    if (!isStadiumValid) {
        throw new Error(`Invalid stadiumid: ${stadiumid}`);
    }
    return await (0, visits_1.insertVisit)(visitData);
};
exports.createVisit = createVisit;
//# sourceMappingURL=visits.js.map