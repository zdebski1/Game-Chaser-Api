import pool from '../utils/db';
import { Visit } from '../models/visits';

export const insertVisit = async (visitData: Omit<Visit, 'visitId'>): Promise<number> => {
  const { stadiumId, visitDate, createBy, createDate } = visitData;

  const result = await pool.query(
    `INSERT INTO dbo.visit (stadiumId, visitDate, createBy, createDate, isDeleted) 
     VALUES ($1, $2, $3, $4, false) 
     RETURNING visitId`,
    [stadiumId, visitDate, createBy, createDate]
  );

  return result.rows[0].visitId;
};

export const findStadiumById = async (stadiumId: number): Promise<boolean> => {
  const result = await pool.query(
    `SELECT 1 FROM tlkp.stadium WHERE stadiumId = $1 LIMIT 1`,
    [stadiumId]
  );

  return result.rows.length > 0;
};
