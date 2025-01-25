import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'Admin',
  password: 'abc123',
  database: 'GameChaser',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
