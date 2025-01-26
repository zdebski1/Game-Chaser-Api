import { insertVisit } from '../repository/visit';
import { findStadiumById } from '../repository/stadium';
import { Visit } from '../models/visit';
import { Stadium } from '../models/stadium';

export const createVisit = async (
  visitData: Omit<Visit, 'visitid' | 'isDeleted'>,
  stadium: Pick<Stadium, 'stadiumid'>
): Promise<number> => {
  const { stadiumid } = stadium;

  const isStadiumValid = await findStadiumById(stadiumid);
  if (!isStadiumValid) {
    throw new Error(`Invalid stadiumid: ${stadiumid}`);
  }

  return await insertVisit(visitData);
};
