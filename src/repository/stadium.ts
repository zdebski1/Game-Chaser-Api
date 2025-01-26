import db from '../config/knex';
import { Stadium } from '../models/stadium';

export const stadiumByIdExists = async (stadiumid: Stadium['stadiumid']): Promise<boolean> => {
  const columns = Object.keys(stadiumid);
  const result = await db('tlkp.stadium')
    .select(columns)
    .where('stadiumid', stadiumid)
    .limit(1);

  return result.length > 0;
};

export const findAllStadium = async (stadium: Omit<Stadium, 'stadiumid'| 'insertdate'|'insertby'>): Promise<Stadium[]> => {
  const columns = Object.keys(stadium);
  const result = await db('tlkp.stadium')
    .select(columns);
  return result;
};