import db from '../config/knex';
import { Stadium } from '../models/stadium';

export const findStadiumById = async (stadiumid: Stadium['stadiumid']): Promise<boolean> => {
  const result = await db('tlkp.stadium')
    .select(1)
    .where('stadiumid', stadiumid)
    .limit(1);

  return result.length > 0;
};