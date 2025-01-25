import db from '../config/knex';
import { Visit } from '../models/visits';

export const insertVisit = async (visitData: Omit<Visit, 'visitid'| 'isdeleted'>): Promise<number> => {
  const result = await db('dbo.visit')
    .insert({
      ...visitData,
      isdeleted: false,
    })
    .returning('visitid');

  return result[0].visitid;
};