"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitRoutes = visitRoutes;
const visits_1 = require("../controllers/visits");
async function visitRoutes(app) {
    app.post('/visits', visits_1.createVisitController);
    app.get('/visits', visits_1.createVisitController);
}
//# sourceMappingURL=visits.js.map