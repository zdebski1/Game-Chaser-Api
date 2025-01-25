import pool from '../utils/db';
import { Visit } from '../models/visits';

export const insertVisit = async (visitData: Omit<Visit, 'visitId'>): Promise<number> => {
  const { stadiumId, visitDate, createBy, createDate } = visitData;

  const [result] = await pool.query(
    `INSERT INTO visit (stadiumId, visitDate, createBy, createDate, isDeleted) 
     VALUES (?, ?, ?, ?, false)`,
    [stadiumId, visitDate, createBy, createDate]
  );

  return (result as any).insertId;
};

export const findStadiumById = async (stadiumId: number): Promise<boolean> => {
  const [rows] = await pool.query(
    `SELECT 1 FROM stadiums WHERE stadiumId = ? LIMIT 1`,
    [stadiumId]
  );

  return Array.isArray(rows) && rows.length > 0;  // Ensure that rows is an array
};
