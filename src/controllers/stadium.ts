import { FastifyRequest, FastifyReply } from 'fastify';
import { Stadium } from '../models/stadium';
import { returnStadium } from '../services/stadium';

export const returnStadiumController = async (
  _req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const stadium: Omit<Stadium, 'stadiumid' | 'insertdate' | 'insertby'> = {
      stadiumname: '',
      stadiumcity: 0,
      stadiumcapacity: 0,
      stadiumlongitude: 0,
      stadiumlatitude: 0,
    };

    const stadiums = await returnStadium(stadium);

    return res.status(200).send({
      success: true,
      stadiums,
    });
  } catch (error) {
    console.error('Error retrieving stadiums:', error);

    return res.status(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
