import { insertVisit } from '../repository/visit';
import { stadiumByIdExists } from '../repository/stadium';
import { Visit } from '../models/visit';
import { Stadium } from '../models/stadium';

export const createVisit = async (
  visitData: Omit<Visit, 'visitid' | 'isDeleted'>,
  stadium: Pick<Stadium, 'stadiumid'>
): Promise<number> => {
  const { stadiumid } = stadium;

  const isStadiumValid = await stadiumByIdExists(stadiumid);
  if (!isStadiumValid) {
    throw new Error(`Invalid stadiumid: ${stadiumid}`);
  }

  return await insertVisit(visitData);
};
