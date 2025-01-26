import db from '../config/knex';
import { Stadium } from '../models/stadium';

export const findStadiumById = async (stadiumid: Stadium['stadiumid']): Promise<boolean> => {
  const result = await db('tlkp.stadium')
    .select(1)
    .where('stadiumid', stadiumid)
    .limit(1);

  return result.length > 0;
};

export const findAllStadium = async (stadium: Omit<Stadium, 'stadiumid'| 'insertdate'|'insertby'>): Promise<Stadium[]> => {
  const columns = Object.keys(stadium);
  const result = await db('tlkp.stadium').select(columns);
  return result;
};