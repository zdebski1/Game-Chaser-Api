import { insertVisit, findStadiumById } from '../repository/visits';
import { Visit } from '../models/visits';

export const createVisit = async (visitData: Omit<Visit, 'visitId'>): Promise<number> => {
  const { stadiumId } = visitData;

  const isStadiumValid = await findStadiumById(stadiumId);
  if (!isStadiumValid) {
    throw new Error(`Invalid stadiumId: ${stadiumId}`);
  }

  return await insertVisit(visitData);
};
