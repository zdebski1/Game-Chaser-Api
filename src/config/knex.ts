import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'Admin',
    password: 'abc123',
    database: 'GameChaser',
  },
});

export default db;