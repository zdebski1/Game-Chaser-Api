import { findAllStadium } from '../repository/stadium';
import { Stadium } from '../models/stadium';

export const returnStadium = async (
  stadium: Omit<Stadium, 'stadiumid' | 'insertdate' | 'insertby'>
): Promise<Stadium[]> => {
  return findAllStadium(stadium);
};
