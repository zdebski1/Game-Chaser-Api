"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVisitController = void 0;
const visits_1 = require("../services/visits");
const createVisitController = async (req, res) => {
    try {
        const { stadiumid, createby } = req.body;
        if (!stadiumid || !createby) {
            return res.status(400).send({
                success: false,
                message: 'stadiumid and createby are required.',
            });
        }
        const visitId = await (0, visits_1.createVisit)({
            stadiumid: req.body.stadiumid,
            visitdate: req.body.visitdate,
            createby: req.body.createby,
            createdate: new Date(),
            modifyby: null,
            modifydate: null,
            isdeleted: false
        }, { stadiumid });
        return res.status(201).send({
            success: true,
            visitId,
        });
    }
    catch (error) {
        console.error('Error creating visit:', error);
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
exports.createVisitController = createVisitController;
//# sourceMappingURL=visits.js.map