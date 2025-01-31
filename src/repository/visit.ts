import db from '../config/knex';
import { Visit } from '../models/visit';

export const insertVisit = async (visitData: Omit<Visit, 'visitid'| 'isdeleted'>): Promise<number> => {
  const result = await db('dbo.visit')
    .insert({
      ...visitData,
      isdeleted: false,
    })
    .returning('visitid');

  return result[0].visitid;
};



export const returnVisits = async (): Promise<Visit[]> => {
  const result = await db('dbo.visit');

  return result as Visit[];
};