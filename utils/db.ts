import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'Admin',
  password: 'abc123',
  database: 'GameChaser',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;