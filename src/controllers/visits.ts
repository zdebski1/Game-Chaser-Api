import { FastifyRequest, FastifyReply } from 'fastify';
import { Visit } from '../models/visits';
import { createVisit } from '../services/visits';

export const createVisitController = async (
  req: FastifyRequest<{ Body: Omit<Visit, 'visitid' | 'isdeleted'> }>,
  res: FastifyReply
) => {
  try {
    const { stadiumid, createby } = req.body;

    if (!stadiumid || !createby) {
      return res.status(400).send({
        success: false,
        message: 'stadiumid and createby are required.',
      });
    }

    const visitId = await createVisit(
      {
        stadiumid: req.body.stadiumid,
        visitdate: req.body.visitdate,
        createby: req.body.createby,
        createdate: new Date(),
        modifyby: null,
        modifydate: null,
        isdeleted: false
      },
      { stadiumid }
    );
    

    return res.status(201).send({
      success: true,
      visitId,
    });
  } catch (error) {
    console.error('Error creating visit:', error);

    return res.status(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  }
};