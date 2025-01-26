"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllStadium = exports.findStadiumById = void 0;
const knex_1 = __importDefault(require("../config/knex"));
const findStadiumById = async (stadiumid) => {
    const result = await (0, knex_1.default)('tlkp.stadium')
        .select(1)
        .where('stadiumid', stadiumid)
        .limit(1);
    return result.length > 0;
};
exports.findStadiumById = findStadiumById;
const findAllStadium = async (stadium) => {
    const columns = Object.keys(stadium);
    const result = await (0, knex_1.default)('tlkp.stadium').select(columns);
    return result;
};
exports.findAllStadium = findAllStadium;
const stadiums = await (0, exports.findAllStadium)();
console.log(stadiums);
//# sourceMappingURL=stadium.js.map